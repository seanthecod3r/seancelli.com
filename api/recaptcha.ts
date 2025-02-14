import type { VercelRequest, VercelResponse } from "@vercel/node";

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  const { recaptcha } = req.body;
  if (!recaptcha) {
    return res.status(400).json({ error: "Missing reCAPTCHA token" });
  }

  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
  if (!SECRET_KEY) {
    return res.status(500).json({ error: "reCAPTCHA secret key is missing" });
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: SECRET_KEY,
          response: recaptcha,
        }).toString(),
      },
    );

    const data = await response.json();

    if (!data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: (error as Error).message });
  }
};

export default handler;
