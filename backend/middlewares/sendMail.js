import { createTransport } from "nodemailer";

export const sendMail = async (userMessage) => {
    const transporter = createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD,
      },
    });
    
    await transporter.sendMail({
        subject:"Contact Message from Portfolio",
        to:process.env.MY_MAIL,
        from:process.env.MY_MAIL,
        text: userMessage,
    });
};