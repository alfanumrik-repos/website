import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, organization, inquiryType, message } = body;

    // Send email to both recipients
    const { data, error } = await resend.emails.send({
      from: 'Alfanumrik Contact Form <onboarding@resend.dev>',
      to: ['shreyash@vidyayatan.com', 'sales@alfanumrik.com'],
      subject: `New Contact Form Submission - ${inquiryType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
