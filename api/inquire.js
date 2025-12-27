import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Data sent from your form
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Send the email
    await resend.emails.send({
      from: `Topline Mechanical Rides <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      reply_to: email,
      subject: `New Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
      `,
    });

    // Success response
    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ error: "Email failed to send" });
  }
}
