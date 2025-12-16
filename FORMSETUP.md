# Form Setup for Q Fitness

This project uses Formspree for handling contact form submissions. Formspree provides built-in spam protection and email delivery.

## Setup Instructions

### 1. Formspree Account

1. Sign up for a free account at https://formspree.io
2. Create a new form endpoint
3. Your form endpoint URL will be: `https://formspree.io/f/YOUR_FORM_ID`

### 2. Current Configuration

The forms are already configured to use:
- **Contact Form**: `https://formspree.io/f/mrbnwoen`
- **Testimonial Form**: `https://formspree.io/f/mrbnwoen`

### 3. Form Fields

**Contact Form** (`contact.html`):
- `name` (required)
- `email` (required)
- `phone` (optional)
- `message` (required)
- `_subject` (automatically set to "New Contact Form Submission from Q Fitness Website")

**Testimonial Form** (`community/testimonials.html`):
- `name` (required)
- `email` (required)
- `message` (required - contains the testimonial text)
- `_subject` (automatically set to "New Testimonial Submission from Q Fitness Website")

### 4. Viewing Submissions

1. Log in to your Formspree account
2. Navigate to your form dashboard
3. View all submissions, set up email notifications, and configure spam filters

### 5. Benefits

- ✅ Free tier available (50 submissions/month)
- ✅ Built-in spam protection
- ✅ No serverless functions needed
- ✅ Simple implementation
- ✅ Email notifications
- ✅ Webhook support (optional)
- ✅ No API keys required

### 6. Updating the Form Endpoint

If you need to change the Formspree endpoint:

1. Update the endpoint URL in:
   - `contact.html` (line ~287)
   - `community/testimonials.html` (line ~287)

2. Replace `https://formspree.io/f/mrbnwoen` with your new endpoint URL

## Troubleshooting

- If forms aren't submitting:
  1. Check browser console for errors
  2. Verify the Formspree endpoint URL is correct
  3. Check Formspree dashboard for submission status
  4. Ensure form fields match the expected names

- If you're not receiving emails:
  1. Check Formspree dashboard for email notification settings
  2. Verify your email address in Formspree account settings
  3. Check spam folder

