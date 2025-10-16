/**
 * Check Current RLS Policies
 * Query the actual policies to see what's configured
 */

require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

console.log('🔍 Checking Current RLS Policies...\n')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

async function checkPolicies() {
  try {
    const adminClient = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })

    // Query current policies
    const { data: policies, error } = await adminClient
      .from('pg_policies')
      .select('*')
      .eq('tablename', 'beta_signups')

    if (error) {
      console.log('❌ Could not query policies:', error.message)
      return
    }

    console.log(`📊 Found ${policies.length} policies for beta_signups:\n`)

    policies.forEach((policy, index) => {
      console.log(`${index + 1}. Policy: "${policy.policyname}"`)
      console.log(`   Roles: ${policy.roles}`)
      console.log(`   Command: ${policy.cmd}`)
      console.log(`   Permissive: ${policy.permissive}`)
      console.log(`   Qual: ${policy.qual || 'NULL'}`)
      console.log(`   With Check: ${policy.with_check || 'NULL'}`)
      console.log('')
    })

    // Test different approaches
    console.log('🧪 Testing different insert approaches...\n')

    const anonClient = createClient(supabaseUrl, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    const testEmail = `test-policy-check-${Date.now()}@gmail.com`

    // Test 1: Regular insert
    console.log('1️⃣ Testing regular insert...')
    const { data: data1, error: error1 } = await anonClient
      .from('beta_signups')
      .insert({ 
        email: testEmail,
        source: 'policy-test',
        user_agent: 'policy-check-script'
      })
      .select()

    if (error1) {
      console.log(`   ❌ Failed: ${error1.message}`)
      console.log(`   Code: ${error1.code}`)
    } else {
      console.log(`   ✅ Success!`)
      console.log(`   Data:`, data1)
    }

    // Test 2: Check if we can read our own data
    console.log('\n2️⃣ Testing read access...')
    const { data: readData, error: readError } = await anonClient
      .from('beta_signups')
      .select('email')
      .eq('email', testEmail)

    if (readError) {
      console.log(`   ❌ Read failed: ${readError.message}`)
    } else {
      console.log(`   ✅ Read success: Found ${readData.length} records`)
    }

    // Provide specific fix based on current policies
    console.log('\n🔧 Recommended Fix:')
    console.log('Based on your current policies, try this SQL:')
    console.log('---')
    console.log(`
-- Drop the existing anon policy that's not working
DROP POLICY IF EXISTS "anon_insert_policy" ON beta_signups;

-- Drop the public policy (if you want more security)
DROP POLICY IF EXISTS "Enable insert for all users" ON beta_signups;

-- Create a working policy for anon role
CREATE POLICY "anon_insert_working"
ON beta_signups
FOR INSERT
TO anon
WITH CHECK (true);

-- Alternative: If anon doesn't work, try authenticated
CREATE POLICY "authenticated_insert"
ON beta_signups
FOR INSERT
TO authenticated
WITH CHECK (true);
    `)
    console.log('---\n')

  } catch (error) {
    console.log('❌ Check failed:', error.message)
  }
}

checkPolicies()
