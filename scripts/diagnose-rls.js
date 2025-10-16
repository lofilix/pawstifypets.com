/**
 * RLS Policy Diagnostic Script
 * Checks what RLS policies are actually active on the beta_signups table
 */

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' })

const { createClient } = require('@supabase/supabase-js')

console.log('🔍 Diagnosing RLS Policies...\n')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

async function diagnoseRLS() {
  try {
    // Create admin client to check policies
    const adminClient = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })

    console.log('1️⃣ Checking RLS status on beta_signups table...')
    
    // Check if RLS is enabled
    const { data: rlsStatus, error: rlsError } = await adminClient
      .rpc('check_rls_enabled', { table_name: 'beta_signups' })
      .catch(async () => {
        // Fallback: query pg_tables directly
        const { data, error } = await adminClient
          .from('pg_tables')
          .select('*')
          .eq('tablename', 'beta_signups')
          .eq('schemaname', 'public')
        return { data, error }
      })

    if (rlsError) {
      console.log('⚠️  Could not check RLS status directly, trying alternative method...\n')
    }

    console.log('2️⃣ Checking active policies...')
    
    // Query policies directly
    const { data: policies, error: policyError } = await adminClient
      .from('pg_policies')
      .select('*')
      .eq('tablename', 'beta_signups')

    if (policyError) {
      console.log('❌ Could not query policies:', policyError.message)
    } else {
      console.log(`Found ${policies.length} policies:`)
      policies.forEach((policy, index) => {
        console.log(`\nPolicy ${index + 1}:`)
        console.log(`  Name: ${policy.policyname}`)
        console.log(`  Command: ${policy.cmd}`)
        console.log(`  Roles: ${policy.roles}`)
        console.log(`  Permissive: ${policy.permissive}`)
        console.log(`  Qual: ${policy.qual || 'N/A'}`)
        console.log(`  With Check: ${policy.with_check || 'N/A'}`)
      })
    }

    console.log('\n3️⃣ Testing different insert methods...')
    
    // Test 1: Anonymous insert
    console.log('   Testing anonymous insert...')
    const anonClient = createClient(supabaseUrl, anonKey)
    const testEmail1 = `test-anon-${Date.now()}@gmail.com`
    
    const { data: insert1, error: error1 } = await anonClient
      .from('beta_signups')
      .insert({ 
        email: testEmail1,
        source: 'diagnostic-test',
        user_agent: 'rls-diagnostic'
      })
      .select()

    if (error1) {
      console.log(`   ❌ Anonymous insert failed: ${error1.message}`)
      console.log(`   Code: ${error1.code}`)
      console.log(`   Details: ${error1.details || 'N/A'}`)
      console.log(`   Hint: ${error1.hint || 'N/A'}`)
    } else {
      console.log(`   ✅ Anonymous insert succeeded!`)
    }

    // Test 2: Service role insert
    console.log('   Testing service role insert...')
    const testEmail2 = `test-service-${Date.now()}@gmail.com`
    
    const { data: insert2, error: error2 } = await adminClient
      .from('beta_signups')
      .insert({ 
        email: testEmail2,
        source: 'diagnostic-test-service',
        user_agent: 'rls-diagnostic-service'
      })
      .select()

    if (error2) {
      console.log(`   ❌ Service role insert failed: ${error2.message}`)
    } else {
      console.log(`   ✅ Service role insert succeeded!`)
    }

    console.log('\n4️⃣ Checking table permissions...')
    
    // Check table permissions
    const { data: permissions, error: permError } = await adminClient
      .from('information_schema.table_privileges')
      .select('*')
      .eq('table_name', 'beta_signups')
      .eq('table_schema', 'public')

    if (permError) {
      console.log('⚠️  Could not check table permissions')
    } else {
      console.log('Table permissions:')
      permissions.forEach(perm => {
        console.log(`  ${perm.grantee}: ${perm.privilege_type}`)
      })
    }

    console.log('\n5️⃣ Suggested fix...')
    console.log('If anonymous inserts are still failing, try this SQL:')
    console.log('---')
    console.log(`
-- Completely reset RLS policies
DROP POLICY IF EXISTS "Allow anonymous inserts" ON beta_signups;
DROP POLICY IF EXISTS "Allow public inserts" ON beta_signups;
DROP POLICY IF EXISTS "Allow service role to read" ON beta_signups;

-- Disable RLS temporarily to test
ALTER TABLE beta_signups DISABLE ROW LEVEL SECURITY;

-- Test if inserts work without RLS
-- (You can test this in Supabase SQL Editor)

-- If they work, re-enable RLS with correct policy
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Create the correct policy
CREATE POLICY "Allow anonymous inserts"
ON beta_signups
FOR INSERT
TO anon
WITH CHECK (true);
    `)
    console.log('---\n')

  } catch (error) {
    console.log('\n❌ Diagnostic failed!')
    console.log('Error:', error.message)
  }
}

diagnoseRLS()
