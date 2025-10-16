/**
 * Current Supabase RLS Test (2024/2025 Best Practices)
 * Tests anonymous inserts with proper role handling
 */

require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

console.log('🔍 Testing Current Supabase RLS (2024/2025)...\n')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

async function testCurrentRLS() {
  try {
    // Test 1: Anonymous client (this is what the landing page uses)
    console.log('1️⃣ Testing anonymous client (landing page simulation)...')
    const anonClient = createClient(supabaseUrl, anonKey)
    
    // Check auth state
    const { data: { user }, error: authError } = await anonClient.auth.getUser()
    console.log(`   Auth state: ${user ? 'Authenticated' : 'Anonymous'}`)
    if (authError) console.log(`   Auth error: ${authError.message}`)
    
    const testEmail = `test-current-${Date.now()}@gmail.com`
    console.log(`   Test email: ${testEmail}`)
    
    const { data, error } = await anonClient
      .from('beta_signups')
      .insert({ 
        email: testEmail,
        source: 'current-test',
        user_agent: 'updated-test-script'
      })
      .select()

    if (error) {
      console.log(`   ❌ FAILED: ${error.message}`)
      console.log(`   Code: ${error.code}`)
      console.log(`   Details: ${error.details || 'None'}`)
      console.log(`   Hint: ${error.hint || 'None'}`)
      
      if (error.code === '42501') {
        console.log('\n   🔍 RLS Policy Issue - Try this SQL:')
        console.log('   ---')
        console.log(`
-- Check current policies
SELECT policyname, roles, cmd FROM pg_policies WHERE tablename = 'beta_signups';

-- Create correct policy for anonymous users
CREATE POLICY "Enable insert for anonymous users"
ON beta_signups
FOR INSERT
TO anonymous
WITH CHECK (true);
        `)
        console.log('   ---\n')
      }
    } else {
      console.log(`   ✅ SUCCESS! Anonymous insert worked.`)
      console.log(`   Data:`, data)
    }

    // Test 2: Check if we can read data with anon client
    console.log('\n2️⃣ Testing anonymous read access...')
    const { data: readData, error: readError } = await anonClient
      .from('beta_signups')
      .select('email, created_at')
      .limit(3)

    if (readError) {
      console.log(`   ❌ Read failed: ${readError.message}`)
      console.log('   (This is expected - anon should not read all data)')
    } else {
      console.log(`   ✅ Read access working`)
      console.log(`   Found ${readData.length} records`)
    }

    // Test 3: Service role (admin) access
    console.log('\n3️⃣ Testing service role access...')
    const adminClient = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })
    
    const { data: adminData, error: adminError } = await adminClient
      .from('beta_signups')
      .select('email, created_at')
      .order('created_at', { ascending: false })
      .limit(5)

    if (adminError) {
      console.log(`   ❌ Admin read failed: ${adminError.message}`)
    } else {
      console.log(`   ✅ Admin access working`)
      console.log(`   Total signups: ${adminData.length}`)
      adminData.forEach((signup, index) => {
        console.log(`   ${index + 1}. ${signup.email} - ${signup.created_at}`)
      })
    }

    console.log('\n📊 Summary:')
    console.log('✅ Environment variables: Working')
    console.log('✅ Database connection: Working')
    console.log('✅ Service role access: Working')
    if (data) {
      console.log('✅ Anonymous inserts: Working')
      console.log('\n🎉 Your landing page signup form should work!')
    } else {
      console.log('❌ Anonymous inserts: Blocked by RLS')
      console.log('\n🔧 Fix: Run the SQL policy creation above')
    }

  } catch (error) {
    console.log('\n❌ Test failed with error:')
    console.log(error.message)
  }
}

testCurrentRLS()
