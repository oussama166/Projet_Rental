import nodemailer from "nodemailer";


type EmailPayload = {
  to: string;
  subject: string;
  title?: string;
  username?: string;
  html?: string;
};

// This host and port auth info must change
export default async function sendEmailCompany(data: EmailPayload) {
  const transporter = nodemailer.createTransport({
    host: "mail.ambsrental.ma",
    port: 587,
    secure: false,
    auth: {
      user: "contact@ambsrental.ma",
      pass: "v1aq4~X7c0@YGQ",
      type : "Login"
    },
  });

  return await transporter.sendMail({
    from: `${data.title} <${data.to}>`,
    to: "AMBS <contact@ambsrental.ma>",
    subject: "AMBS CONTACT NOUS",
    text: data.subject,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Us</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                padding: 20px;
            }
            h1 {
                color: #333;
                font-size: 24px;
                text-decoration : underline;
            }
            p {
                color: #555;
                font-size: 16px;
                line-height: 1.5;
            }
            .signature {
                font-style: italic;
            }
        </style>
    </head>
    <body>
        <h1>${data.subject}</h1>
        <p>Dear ${data.username},</p>
        <p>Thank you for reaching out to us at ${data.title}. We appreciate your interest!</p>
        <p>${data.subject}</p>
        <p class="signature">Best regards,</p>
        <p class="signature">The ${data.title} Team</p>
    </body>
    </html>
    `,
  });
}
