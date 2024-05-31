import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "parko.user.assistance@gmail.com",
    pass: "esszpdjpxeozaayc",
  },
});

const emailHtml = render(<WelcomeTemplate name="Ayroid" />);

const options = {
  from: "parko.user.assistance@gmail.com",
  to: "ayroids@gmail.com",
  subject: "Hello World",
  html: emailHtml,
};

export const GET = async (request: NextRequest) => {
  await transporter.sendMail(options);
  return NextResponse.json("Mail Sent Successfully!");
};
