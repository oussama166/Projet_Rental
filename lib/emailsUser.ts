import nodemailer from "nodemailer";

type EmailPayload = {
    to: string;
    subject: string;
    title?: string;
    username?: string;
    html?: string;
};
// This host and port auth info must change
export default async function sendEmailUser(data: EmailPayload) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service : "gmail",
        port: 465,
        secure: false,
        auth: {
            user: "contact@ambsrental.ma",
            pass: "v1aq4~X7c0@YGQ",
        },
    });

    return await transporter.sendMail({
        from: "AMBS <contact@ambsrental.ma>",
        to: `${data.title} <${data.to}>`,
        subject: "AMBS CONTACT NOUS",
        text: data.subject,
        html: `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nous Contacter</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f9f9f9;
                padding: 20px;
            }
            h1 {
                color: #333;
                font-size: 24px;
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
        <h1>Contacter notre equipe de service</h1>
        <p>Cher(e) ${data.username},</p>
        <p>Nous vous remercions d'avoir pris contact avec nous chez AMBS . Votre intérêt est très apprécié !</p>
        <p>${data.subject}</p>
        <p class="signature">Cordialement,</p>
        <p class="signature">L'équipe de AMBS</p>
    </body>
    </html>
    
      `,
    });
}
