# Contact Form Supabase Integration Setup

## Overview
The Contact Us form has been integrated with Supabase to store contact messages in a database. This guide will help you complete the setup.

## ✅ What's Already Done

### 1. Database Schema Created
- **File:** `docs/CONTACT_MESSAGES_SCHEMA.sql`
- **Table:** `contact_messages`
- **Features:**
  - Stores name, email, subject, message
  - Tracks status (new, read, replied, archived)
  - Includes metadata (user agent, IP, source)
  - Has proper indexes and triggers
  - Row Level Security (RLS) configured

### 2. API Endpoint Created
- **File:** `src/app/api/contact/route.ts`
- **Endpoint:** `POST /api/contact`
- **Features:**
  - Input validation and sanitization
  - Email format validation
  - Field length limits
  - Error handling
  - CORS support

### 3. Frontend Integration Complete
- **File:** `src/app/contact/page.tsx`
- **Features:**
  - Real API integration (no more simulation)
  - Proper error handling
  - Loading states
  - Success/error feedback

### 4. Test Script Ready
- **File:** `scripts/test-contact-api.js`
- **Purpose:** Test the complete flow

## 🚀 Setup Steps

### Step 1: Create the Database Table
Run this SQL in your Supabase SQL Editor:

```sql
-- Copy and paste the entire contents of docs/CONTACT_MESSAGES_SCHEMA.sql
-- Or run each section individually
```

### Step 2: Verify Environment Variables
Make sure these are in your `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Step 3: Test the Integration
Run the test script:

```bash
npm run test-contact
```

Or manually test:
1. Start dev server: `npm run dev`
2. Go to `/contact`
3. Fill out and submit the form
4. Check Supabase dashboard for the new record

## 📊 Database Schema Details

### Table: `contact_messages`
```sql
id              BIGSERIAL PRIMARY KEY
name            TEXT NOT NULL
email           TEXT NOT NULL
subject         TEXT NOT NULL
message         TEXT NOT NULL
status          TEXT DEFAULT 'new' (new|read|replied|archived)
source          TEXT DEFAULT 'contact_form'
user_agent      TEXT
ip_address      INET
created_at      TIMESTAMPTZ DEFAULT NOW()
updated_at      TIMESTAMPTZ DEFAULT NOW()
```

### RLS Policies
- ✅ Anonymous users can INSERT (submit contact forms)
- ✅ Service role can SELECT, UPDATE, DELETE (admin operations)
- ✅ No public read access (privacy protection)

## 🔧 API Endpoint Details

### POST `/api/contact`
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "subject": "Question about demo",
  "message": "How can I access the demo?"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We'll get back to you soon.",
  "messageId": 123
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Validation error message"
}
```

## 🛡️ Security Features

### Input Validation
- ✅ Required field validation
- ✅ Email format validation
- ✅ Field length limits (name: 100, subject: 200, message: 2000)
- ✅ Input sanitization

### Privacy Protection
- ✅ IP address logging (for spam prevention)
- ✅ User agent tracking
- ✅ Source tracking (referrer)
- ✅ No public read access to messages

### Error Handling
- ✅ Graceful error responses
- ✅ Server-side logging
- ✅ Client-side error display

## 📈 Monitoring & Analytics

### Logging
- ✅ Successful submissions logged with message ID
- ✅ Errors logged for debugging
- ✅ Request metadata captured

### Database Queries
Check message status:
```sql
SELECT status, COUNT(*) 
FROM contact_messages 
GROUP BY status;
```

View recent messages:
```sql
SELECT name, email, subject, created_at, status
FROM contact_messages 
ORDER BY created_at DESC 
LIMIT 10;
```

## 🚀 Next Steps

### Optional Enhancements
1. **Email Notifications:** Send email alerts for new messages
2. **Admin Dashboard:** Create admin interface to manage messages
3. **Auto-Response:** Send confirmation emails to users
4. **Spam Protection:** Add CAPTCHA or rate limiting
5. **Message Categories:** Add dropdown for inquiry types

### Integration with Email Services
Consider integrating with:
- **Resend** (recommended for Next.js)
- **SendGrid**
- **Mailgun**
- **AWS SES**

## 🧪 Testing

### Manual Testing
1. Fill out contact form with valid data
2. Submit form
3. Verify success message appears
4. Check Supabase dashboard for new record
5. Test with invalid data (empty fields, bad email)
6. Verify error messages appear

### Automated Testing
Run the test script:
```bash
node scripts/test-contact-api.js
```

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Check server logs for API errors
3. Verify Supabase connection
4. Confirm database table exists
5. Check environment variables

The contact form is now fully functional and ready for production use! 🎉
