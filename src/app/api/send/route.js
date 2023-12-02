import { Resend } from "resend";

const resend = new Resend(process.env.PORTFOLIO_API_KEY);

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "homkar2015@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});
