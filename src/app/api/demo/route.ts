import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, role, email, phone, schoolName, city, size, interests } = body;

    // Send email to both recipients
    const { data, error } = await resend.emails.send({
      from: 'Alfanumrik Demo Request <onboarding@resend.dev>',
      to: ['shreyash@vidyayatan.com', 'sales@alfanumrik.com'],
      subject: `New Demo Request - ${schoolName}`,
      html: `
        <h2>New Demo Request</h2>
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>School Information</h3>
        <p><strong>School Name:</strong> ${schoolName}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>School Size:</strong> ${size}</p>
        
        <h3>Interests/Comments</h3>
        <p>${interests || 'Not specified'}</p>
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
