import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type EmailTemplateProps = {
  message: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

const EmailTemplate = ({ message, email, firstName, lastName, phoneNumber }: EmailTemplateProps) => {
  return (
    <Html>
      <Head></Head>
      <Preview>New message from your portfolio website</Preview>
      <Tailwind>
        <Body className='bg-gray-100'>
          <Container className='bg-green-500 px-10'>
            <Section className=' bg-white border my-10 px-10 py-4 rounded-2xl text-accent'>
              <Heading className='leading-tight'>You received the following message from {firstName} {lastName}</Heading>
              <Hr />
              <Text>{phoneNumber}</Text>
              <Text>{firstName} {lastName}</Text>
              <Hr />
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
