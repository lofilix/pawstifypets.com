require('dotenv').config({ path: '.env.local' })

const testContactAPI = async () => {
  console.log('🧪 Testing Contact API...\n')

  // Test data
  const testMessage = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Contact Form',
    message: 'This is a test message to verify the contact form functionality works correctly.'
  }

  try {
    console.log('📤 Sending test contact message...')
    console.log('Data:', JSON.stringify(testMessage, null, 2))
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testMessage),
    })

    const result = await response.json()
    
    console.log(`\n📊 Response Status: ${response.status}`)
    console.log('📋 Response Body:', JSON.stringify(result, null, 2))

    if (response.ok && result.success) {
      console.log('\n✅ Contact API test PASSED!')
      console.log(`📧 Message ID: ${result.messageId}`)
      console.log('💬 Message:', result.message)
    } else {
      console.log('\n❌ Contact API test FAILED!')
      console.log('🚨 Error:', result.error)
    }

  } catch (error) {
    console.error('\n💥 Network Error:', error.message)
    console.log('\n💡 Make sure the development server is running (npm run dev)')
  }
}

// Test Supabase connection for contact_messages table
const testSupabaseConnection = async () => {
  console.log('\n🔗 Testing Supabase connection for contact_messages...')
  
  try {
    const { getSupabaseAdmin } = require('../src/lib/supabase.ts')
    const supabase = getSupabaseAdmin()

    // Test table exists and is accessible
    const { data, error } = await supabase
      .from('contact_messages')
      .select('count(*)')
      .limit(1)

    if (error) {
      console.log('❌ Supabase connection failed:', error.message)
      console.log('\n💡 Make sure to:')
      console.log('1. Run the SQL schema: docs/CONTACT_MESSAGES_SCHEMA.sql')
      console.log('2. Check your environment variables')
      return false
    }

    console.log('✅ Supabase connection successful!')
    console.log('📊 Contact messages table is accessible')
    return true

  } catch (error) {
    console.log('❌ Supabase test failed:', error.message)
    return false
  }
}

// Run tests
const runTests = async () => {
  console.log('🚀 Starting Contact Form Integration Tests\n')
  
  // Test Supabase first
  const supabaseOk = await testSupabaseConnection()
  
  if (supabaseOk) {
    // Test API endpoint
    await testContactAPI()
  }
  
  console.log('\n🏁 Tests completed!')
}

runTests()
