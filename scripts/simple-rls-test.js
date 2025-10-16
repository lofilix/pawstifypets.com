/**
 * Simple RLS Test
 * Tests if we can insert with different approaches
 */

require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

console.log('🔍 Simple RLS Test...\n')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

async function testInserts() {
  try {
    // Test 1: Anonymous client
    console.log('1️⃣ Testing anonymous client insert...')
    const anonClient = createClient(supabaseUrl, anonKey)
    
    const testEmail = `test-${Date.now()}@gmail.com`
    console.log(`   Test email: ${testEmail}`)
    
    const { data, error } = await anonClient
      .from('beta_signups')
      .insert({ 
        email: testEmail,
        source: 'simple-test',
        user_agent: 'test-script'
      })
      .select()

    if (error) {
      console.log(`   ❌ FAILED: ${error.message}`)
      console.log(`   Code: ${error.code}`)
      console.log(`   Details: ${error.details || 'None'}`)
      console.log(`   Hint: ${error.hint || 'None'}`)
      
      // Check if it's specifically an RLS error
      if (error.code === '42501') {
        console.log('\n   🔍 This is an RLS (Row Level Security) error.')
        console.log('   The policy is still blocking anonymous inserts.')
        console.log('\n   💡 Try this SQL in Supabase:')
        console.log('   ---')
        console.log(`
-- Disable RLS temporarily to test
ALTER TABLE beta_signups DISABLE ROW LEVEL SECURITY;

-- Test an insert manually in SQL Editor:
INSERT INTO beta_signups (email, source, user_agent) 
VALUES ('test@example.com', 'manual-test', 'sql-editor');

-- If that works, re-enable RLS:
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Create the policy:
CREATE POLICY "Allow anonymous inserts"
ON beta_signups
FOR INSERT
TO anon
WITH CHECK (true);
        `)
        console.log('   ---\n')
      }
    } else {
      console.log(`   ✅ SUCCESS! Insert worked.`)
      console.log(`   Data:`, data)
    }

    // Test 2: Service role client
    console.log('\n2️⃣ Testing service role client insert...')
    const adminClient = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })
    
    const testEmail2 = `test-admin-${Date.now()}@gmail.com`
    console.log(`   Test email: ${testEmail2}`)
    
    const { data: data2, error: error2 } = await adminClient
      .from('beta_signups')
      .insert({ 
        email: testEmail2,
        source: 'admin-test',
        user_agent: 'test-script-admin'
      })
      .select()

    if (error2) {
      console.log(`   ❌ FAILED: ${error2.message}`)
      console.log(`   Code: ${error2.code}`)
    } else {
      console.log(`   ✅ SUCCESS! Admin insert worked.`)
      console.log(`   Data:`, data2)
    }

    // Test 3: Check current data
    console.log('\n3️⃣ Checking current signups...')
    const { data: allData, error: readError } = await adminClient
      .from('beta_signups')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5)

    if (readError) {
      console.log(`   ❌ Could not read data: ${readError.message}`)
    } else {
      console.log(`   📊 Found ${allData.length} signups:`)
      allData.forEach((signup, index) => {
        console.log(`   ${index + 1}. ${signup.email} (${signup.source}) - ${signup.created_at}`)
      })
    }

  } catch (error) {
    console.log('\n❌ Test failed with error:')
    console.log(error.message)
  }
}

testInserts()
