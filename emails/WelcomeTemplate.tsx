import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = () => {
  return (
    <Html>
      <Body>
        <Preview>This is a preview of the email template.</Preview>
        <Container>
          <Text>Welcome to our app!</Text>
          <Text>
            We&apos;re excited to have you on board. Please let us know if you
            have any questions.
          </Text>
          <Link href="https://google.com">Visit our website</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
