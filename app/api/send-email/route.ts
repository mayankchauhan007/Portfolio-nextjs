import ContactFormEmail from '@/email/contact-form-email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({ 
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'mayankchauhan6365@gmail.com',
      subject: 'Contact Form Submission from Portfolio',
      react: ContactFormEmail({
        message,
        senderEmail: email,
        senderName: name || 'Unknown',
      }),
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}