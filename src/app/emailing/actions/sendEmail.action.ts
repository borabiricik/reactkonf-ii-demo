"use server";

import nodemailer from "nodemailer";

export const sendEmail = async (emailHtml: string) => {
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  const options = {
    from: "bora@biricik.dev",
    to: "bora@biricik.dev",
    subject: "hello world",
    html: emailHtml,
  };
  const info = await transporter.sendMail(options);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
