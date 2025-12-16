# Cloudflare Turnstile CAPTCHA Setup

This project uses Cloudflare Turnstile for spam protection on contact forms. It's free, privacy-focused, and easy to implement.

## Setup Instructions

### 1. Get Turnstile Keys

1. Go to https://dash.cloudflare.com/
2. Navigate to Turnstile section
3. Click "Add Site"
4. Enter your site details:
   - Site name: Q Fitness
   - Domain: qfitness.com (and localhost for testing)
   - Widget mode: Managed (recommended)
5. Copy your **Site Key** and **Secret Key**

### 2. Local Development Setup

1. Add to your `.env` file:
   ```
   TURNSTILE_SITE_KEY=your_site_key_here
   TURNSTILE_SECRET_KEY=your_secret_key_here
   ```

2. Update the contact forms:
   - In `contact.html`, replace `YOUR_SITE_KEY_HERE` with your actual site key
   - In `community/testimonials.html`, replace `YOUR_SITE_KEY_HERE` with your actual site key

### 3. Vercel Deployment Setup

1. In Vercel Dashboard, go to your project
2. Navigate to Settings > Environment Variables
3. Add:
   - `TURNSTILE_SITE_KEY` - Your site key
   - `TURNSTILE_SECRET_KEY` - Your secret key

4. Update the HTML files with your site key (or use environment variables in build process)

### 4. Testing

- The CAPTCHA widget will appear on both contact forms
- It's invisible/managed mode - users won't see a checkbox
- The form will verify the token before submitting
- Check browser console for any errors

## How It Works

1. User fills out the form
2. Turnstile runs in the background (invisible)
3. On form submit, the token is sent to the API
4. API verifies the token with Cloudflare
5. If valid, email is sent via Resend
6. If invalid, user sees an error message

## Benefits

- ✅ Free forever
- ✅ Privacy-focused (no tracking)
- ✅ Invisible to users (managed mode)
- ✅ Easy to implement
- ✅ Works with Vercel serverless functions

