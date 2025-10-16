import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { isValidEmail, sanitizeInput } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Subject is required' },
        { status: 400 }
      )
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name.trim())
    const sanitizedEmail = sanitizeInput(email.toLowerCase().trim())
    const sanitizedSubject = sanitizeInput(subject.trim())
    const sanitizedMessage = sanitizeInput(message.trim())

    // Validate email format
    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate field lengths
    if (sanitizedName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must be less than 100 characters' },
        { status: 400 }
      )
    }

    if (sanitizedSubject.length > 200) {
      return NextResponse.json(
        { success: false, error: 'Subject must be less than 200 characters' },
        { status: 400 }
      )
    }

    if (sanitizedMessage.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Message must be less than 2000 characters' },
        { status: 400 }
      )
    }

    // Get Supabase admin client
    const supabase = getSupabaseAdmin()

    // Get request metadata
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const referer = request.headers.get('referer') || 'direct'
    const ipAddress = request.ip || 
                     request.headers.get('x-forwarded-for')?.split(',')[0] || 
                     request.headers.get('x-real-ip') || 
                     'unknown'

    // Insert contact message into Supabase
    const { data, error: insertError } = await supabase
      .from('contact_messages')
      .insert({
        name: sanitizedName,
        email: sanitizedEmail,
        subject: sanitizedSubject,
        message: sanitizedMessage,
        source: referer,
        user_agent: userAgent,
        ip_address: ipAddress,
        status: 'new'
      })
      .select()
      .single()

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { success: false, error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    // Log successful submission (for monitoring)
    console.log(`Contact message submitted: ID ${data.id}, Email: ${sanitizedEmail}, Subject: ${sanitizedSubject}`)

    // Success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! We\'ll get back to you soon.',
        messageId: data.id
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  )
}
