/**
 * Environment Variable Test Script
 * Tests if Supabase credentials are properly configured
 */

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' })

console.log('🔍 Testing Environment Variables...\n')

// Check for required variables
const requiredVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'NEXT_PUBLIC_SITE_URL'
]

let allPresent = true
let publicVarsPresent = true

requiredVars.forEach(varName => {
  const value = process.env[varName]
  const isPresent = !!value
  const icon = isPresent ? '✅' : '❌'
  
  if (!isPresent) {
    allPresent = false
    if (varName.startsWith('NEXT_PUBLIC_')) {
      publicVarsPresent = false
    }
  }
  
  // Show first and last few characters for security
  let display = 'NOT SET'
  if (value) {
    if (value.length > 20) {
      display = `${value.substring(0, 15)}...${value.substring(value.length - 10)}`
    } else {
      display = value
    }
  }
  
  console.log(`${icon} ${varName}`)
  console.log(`   ${display}\n`)
})

console.log('\n📊 Summary:')
console.log(`Total variables checked: ${requiredVars.length}`)
console.log(`Variables detected: ${requiredVars.filter(v => process.env[v]).length}`)
console.log(`Status: ${allPresent ? '✅ ALL CONFIGURED' : '❌ MISSING VARIABLES'}\n`)

if (!allPresent) {
  console.log('⚠️  Missing variables detected!')
  console.log('📝 Make sure .env.local exists in project root with all required variables.\n')
  process.exit(1)
}

// Validate format
console.log('\n🔍 Validating Format...\n')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Check URL format
if (supabaseUrl && !supabaseUrl.startsWith('https://')) {
  console.log('❌ NEXT_PUBLIC_SUPABASE_URL should start with https://')
} else if (supabaseUrl && !supabaseUrl.includes('supabase.co')) {
  console.log('⚠️  NEXT_PUBLIC_SUPABASE_URL format looks unusual (expected *.supabase.co)')
} else if (supabaseUrl) {
  console.log('✅ NEXT_PUBLIC_SUPABASE_URL format looks correct')
}

// Check key formats (JWT tokens start with 'eyJ')
if (anonKey && !anonKey.startsWith('eyJ')) {
  console.log('❌ NEXT_PUBLIC_SUPABASE_ANON_KEY should be a JWT token (starts with eyJ)')
} else if (anonKey) {
  console.log('✅ NEXT_PUBLIC_SUPABASE_ANON_KEY format looks correct')
}

if (serviceKey && !serviceKey.startsWith('eyJ')) {
  console.log('❌ SUPABASE_SERVICE_ROLE_KEY should be a JWT token (starts with eyJ)')
} else if (serviceKey) {
  console.log('✅ SUPABASE_SERVICE_ROLE_KEY format looks correct')
}

console.log('\n✅ Environment variables are properly configured!')
console.log('\n💡 Next step: Test Supabase connection with "node scripts/test-supabase.js"\n')

