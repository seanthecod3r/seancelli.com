import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  try {
    const emailUsername = process.env.EMAIL_USERNAME;
    const emailPassword = process.env.EMAIL_PASSWORD;
    console.log(emailPassword, emailUsername);
    const formData: FormData = req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUsername,
        pass: emailPassword,
      },
    });

    const mailOptions = {
      from: emailUsername,
      to: "sean.celli@yahoo.com",
      subject: "New contact request",
      text: `
        You have a new contact request.
        
        Name: ${formData.name}
        Email: ${formData.email}
				Phone: ${formData.phone}
				Service: ${formData.service}
        Message: ${formData.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: (error as Error).message });
  }
};

export default handler;
