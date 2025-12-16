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
    const { name, phone, message, formType = 'contact' } = req.body;

    // Validate required fields
    if (!name || !message) {
      return res.status(400).json({ error: 'Name and message are required' });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ 
        error: 'Email service is not configured. Please contact support directly at 610-574-2300.' 
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
      return res.status(500).json({ error: 'Failed to send email', details: error });
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
    return res.status(500).json({ 
      error: 'An error occurred while processing your request',
      details: error.message 
    });
  }
}

