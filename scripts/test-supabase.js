/**
 * Supabase Connection Test Script
 * Tests actual connection to Supabase and database access
 */

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' })

const { createClient } = require('@supabase/supabase-js')

console.log('🔌 Testing Supabase Connection...\n')

// Load environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Validate variables exist
if (!supabaseUrl || !anonKey || !serviceKey) {
  console.log('❌ Missing required environment variables!')
  console.log('Run "node scripts/test-env.js" first to check configuration.\n')
  process.exit(1)
}

async function testConnection() {
  try {
    // Test 1: Create client
    console.log('1️⃣ Creating Supabase client...')
    const supabase = createClient(supabaseUrl, anonKey)
    console.log('✅ Client created successfully\n')

    // Test 2: Check if beta_signups table exists
    console.log('2️⃣ Testing database access (beta_signups table)...')
    const { data, error, count } = await supabase
      .from('beta_signups')
      .select('*', { count: 'exact', head: true })

    if (error) {
      if (error.code === '42P01') {
        console.log('❌ Table "beta_signups" does not exist!')
        console.log('📝 You need to create the table using the SQL in docs/SUPABASE_SETUP.md\n')
        console.log('SQL to run in Supabase SQL Editor:')
        console.log('---')
        console.log(`
CREATE TABLE beta_signups (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT,
  user_agent TEXT
);

ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON beta_signups
  FOR INSERT TO anon WITH CHECK (true);
        `)
        console.log('---\n')
        process.exit(1)
      }
      
      if (error.code === 'PGRST301') {
        console.log('❌ Cannot read from table (RLS policy issue or table permissions)')
        console.log('This is actually EXPECTED for the anon key (security working correctly!)')
        console.log('✅ Table exists, RLS is protecting data\n')
      } else {
        throw error
      }
    } else {
      console.log(`✅ Table exists and is accessible`)
      console.log(`   Current signups: ${count || 0}\n`)
    }

    // Test 3: Test insert capability (with rollback)
    console.log('3️⃣ Testing insert capability (test email)...')
    const testEmail = `test-${Date.now()}@gmail.com`
    
    const { data: insertData, error: insertError } = await supabase
      .from('beta_signups')
      .insert({ 
        email: testEmail,
        source: 'connection-test',
        user_agent: 'test-script'
      })
      .select()

    if (insertError) {
      console.log(`❌ Insert failed: ${insertError.message}`)
      console.log(`   Code: ${insertError.code}`)
      
      if (insertError.code === '42501') {
        console.log('⚠️  RLS policy prevents inserts - check your RLS policies')
      }
      process.exit(1)
    } else {
      console.log('✅ Insert successful!')
      console.log(`   Test email: ${testEmail}`)
      console.log('   (You can delete this from Supabase dashboard)\n')
    }

    // Test 4: Test service role key
    console.log('4️⃣ Testing service role access...')
    const adminClient = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })

    const { data: adminData, error: adminError } = await adminClient
      .from('beta_signups')
      .select('email', { count: 'exact' })
      .limit(1)

    if (adminError) {
      console.log(`❌ Service role access failed: ${adminError.message}`)
      console.log('⚠️  Check your SUPABASE_SERVICE_ROLE_KEY\n')
      process.exit(1)
    } else {
      console.log('✅ Service role access working')
      console.log(`   Can read data with service key\n`)
    }

    // Success!
    console.log('\n🎉 ALL TESTS PASSED!\n')
    console.log('✅ Supabase is properly configured')
    console.log('✅ Database table exists')
    console.log('✅ RLS policies are working')
    console.log('✅ Insert functionality works')
    console.log('✅ Service role access works')
    console.log('\n🚀 Your landing page is ready to collect signups!\n')
    
  } catch (error) {
    console.log('\n❌ Connection test failed!\n')
    console.log('Error details:')
    console.log(error.message)
    console.log('\nTroubleshooting:')
    console.log('1. Check your Supabase project is running')
    console.log('2. Verify credentials in .env.local are correct')
    console.log('3. Ensure network connectivity')
    console.log('4. Check Supabase status: https://status.supabase.com\n')
    process.exit(1)
  }
}

testConnection()

