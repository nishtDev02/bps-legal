import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// email function
const sendEmailNotification = async (body) => {
  try {
    // email notification
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL,
      subject: "New Consultation Request - BPS Legal",
      text: `You have a new consultation request from ${body.name} \nphone: ${body.phone} \nemail: ${body.email} \ncase type: ${body.caseType} \nmessage: ${body.message}`,
    });
  } catch (error) {
    console.error("Error sending email notification:", error);
  }
};

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const submission = await Contact.create(body);

    await sendEmailNotification(body);

    return Response.json({ success: true, data: submission });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
