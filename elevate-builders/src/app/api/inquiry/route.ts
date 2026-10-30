import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, type, company, phone, service } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In production, send email via Resend, SendGrid, or Nodemailer.
    // Example with Resend (set RESEND_API_KEY and COMPANY_EMAIL in env):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "website@elevatebuilders.com.sa",
      to: process.env.COMPANY_EMAIL || "info@elevatebuilders.com.sa",
      subject: `New ${type || "inquiry"} from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || ""}</p><p><strong>Company:</strong> ${company || ""}</p><p><strong>Service:</strong> ${service || ""}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });
    */

    console.log("Inquiry received:", { type, name, email, company, phone, service, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}