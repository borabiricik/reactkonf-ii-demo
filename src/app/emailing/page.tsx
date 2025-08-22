"use client";
import { Button } from "@heroui/react";
import { render } from "@react-email/components";
import PlaidVerifyIdentityEmail from "../../../react-email-starter/emails/plaid-verify-identity";
import { sendEmail } from "./actions/sendEmail.action";

const EmailingPage = () => {
  const handleSendEmail = async () => {
    const emailHtml = await render(
      <PlaidVerifyIdentityEmail validationCode="123123" />,
    );

    await sendEmail(emailHtml);
  };
  return (
    <div>
      <Button onPress={handleSendEmail}>Send Email</Button>
    </div>
  );
};

export default EmailingPage;
