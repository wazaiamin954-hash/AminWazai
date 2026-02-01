import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, number, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  await sendEmail({
    to: process.env.EMAIL_USER!, // خپل ایمیل ته راځي
    subject: "New Contact Message 📩",
    html: `
      <h3>New Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Number:</strong> ${number}</p>

      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
