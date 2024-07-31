import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT === '465', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true, 
  },
} as SMTPTransport.Options);

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const sendEmail = async (formData: FormData): Promise<void> => {
  const mailOptions = {
    from: `'${formData.firstName} ${formData.lastName}' <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, 
    subject: 'You have a new message from your portfolio website', 
    text: `
      You have a new message from:
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}
      Message: ${formData.message}
    `, 
    html: `
      <p>You have a new contact form submission from:</p>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `, 
  };

  try {
   
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.error('Connection error:', error);
          reject(error);
        } else {
          console.log('Server is ready to take our messages');
          resolve(success);
        }
      });
    });

   
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('Error sending email:', err);
          reject(err);
        } else {
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          resolve(info);
        }
      });
    });
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
