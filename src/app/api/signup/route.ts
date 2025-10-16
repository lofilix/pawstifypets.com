import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { isValidEmail, isGmailAddress, sanitizeInput } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    const sanitizedEmail = sanitizeInput(email.toLowerCase().trim())

    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (!isGmailAddress(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Please use a Gmail address for beta testing' },
        { status: 400 }
      )
    }

    // Get Supabase admin client
    const supabase = getSupabaseAdmin()

    // Check if email already exists
    const { data: existing } = await supabase
      .from('beta_signups')
      .select('email')
      .eq('email', sanitizedEmail)
      .single()

    if (existing) {
      return NextResponse.json(
        { success: false, error: 'This email is already registered' },
        { status: 409 }
      )
    }

    // Get request metadata
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const referer = request.headers.get('referer') || 'direct'

    // Insert into Supabase
    const { error: insertError } = await supabase
      .from('beta_signups')
      .insert({
        email: sanitizedEmail,
        source: referer,
        user_agent: userAgent,
      })

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { success: false, error: 'Failed to register. Please try again.' },
        { status: 500 }
      )
    }

    // Success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully registered! Check your Gmail for demo access.' 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Signup API error:', error)
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

