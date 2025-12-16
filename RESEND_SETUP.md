# Resend Email Setup for Q Fitness

This project uses Resend for handling contact form submissions via Vercel serverless functions.

## Setup Instructions

### 1. Get Resend API Key

1. Sign up for a Resend account at https://resend.com
2. Navigate to API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 2. Local Development Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Resend API key to `.env`:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   CONTACT_EMAIL=info@qfitness.com
   FROM_EMAIL=noreply@qfitness.com
   ```

3. Verify your domain in Resend:
   - Go to Resend dashboard > Domains
   - Add and verify your domain (e.g., qfitness.com)
   - The FROM_EMAIL must use a verified domain

4. Install dependencies:
   ```bash
   npm install
   ```

### 3. Vercel Deployment Setup

1. In Vercel Dashboard, go to your project
2. Navigate to Settings > Environment Variables
3. Add the following environment variables:
   - `RESEND_API_KEY` - Your Resend API key
   - `CONTACT_EMAIL` - Email address where form submissions will be sent (e.g., info@qfitness.com)
   - `FROM_EMAIL` - Verified email address in Resend (e.g., noreply@qfitness.com)

4. Redeploy your application after adding environment variables

### 4. Testing

- Test the contact form at `/contact.html`
- Test the testimonial form at `/community/testimonials.html`
- Check Resend dashboard for sent emails

## API Endpoint

The contact form API endpoint is located at `/api/contact.js` and handles:
- Contact form submissions (from contact.html)
- Testimonial submissions (from testimonials.html)

## Form Fields

**Contact Form:**
- name (required)
- phone (optional)
- message (required)

**Testimonial Form:**
- name (required)
- message/testimonial (required)

## Troubleshooting

- If emails aren't sending, check:
  1. RESEND_API_KEY is set correctly
  2. FROM_EMAIL uses a verified domain in Resend
  3. Check Vercel function logs for errors
  4. Check Resend dashboard for delivery status

