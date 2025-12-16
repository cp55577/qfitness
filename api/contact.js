// Vercel serverless function for handling contact form submissions via Resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse request body - handle both JSON and form data
    let body;
    if (typeof req.body === 'string') {
      body = JSON.parse(req.body);
    } else {
      body = req.body;
    }
    
    const { name, phone, message, formType = 'contact' } = body;

    // Validate required fields
    if (!name || !message) {
      return res.status(400).json({ error: 'Name and message are required' });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('RESEND')));
      return res.status(500).json({ 
        error: 'Email service is not configured. Please contact support directly at 610-574-2300.',
        debug: process.env.NODE_ENV === 'development' ? 'RESEND_API_KEY not found in environment' : undefined
      });
    }

    // Determine recipient email based on form type
    const recipientEmail = process.env.CONTACT_EMAIL || 'info@qfitness.com';
    const fromEmail = process.env.FROM_EMAIL || 'noreply@qfitness.com';

    // Format email subject based on form type
    const subject = formType === 'testimonial' 
      ? `New Testimonial Submission from ${name}`
      : `New Contact Form Submission from ${name}`;

    // Format email body
    const emailBody = `
      <h2>New ${formType === 'testimonial' ? 'Testimonial' : 'Contact'} Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Submitted from Q Fitness website</small></p>
    `;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: `Q Fitness <${fromEmail}>`,
      to: [recipientEmail],
      subject: subject,
      html: emailBody,
    });

    if (error) {
      console.error('Resend error:', error);
      
      // Provide user-friendly error messages
      let errorMessage = 'Failed to send email. Please try again or call us at 610-574-2300.';
      
      if (error.message && error.message.includes('domain is not verified')) {
        errorMessage = 'Email service is being configured. Please call us at 610-574-2300 or try again later.';
        console.error('Domain verification required in Resend dashboard');
      } else if (error.message) {
        errorMessage = `Email error: ${error.message}`;
      }
      
      return res.status(500).json({ 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error : undefined
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: formType === 'testimonial' 
        ? 'Thank you! Your story has been submitted successfully.'
        : 'Thank you! Your message has been sent successfully.',
      id: data?.id 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error stack:', error.stack);
    return res.status(500).json({ 
      error: 'An error occurred while processing your request',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Please try again or call us at 610-574-2300',
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

