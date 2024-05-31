import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = () => {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-white font-mono">
          <Preview>This is a preview of the email template.</Preview>
          <Container>
            <Text className="text-2xl font-bold">Welcome to our app!</Text>
            <Text>
              We&apos;re excited to have you on board. Please let us know if you
              have any questions.
            </Text>
            <Link href="https://google.com">Visit our website</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
