import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
};

const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
};

const initialFormValid = {
  firstName: false,
  lastName: false,
  email: false,
  phoneNumber: false,
  message: false,
};

const lengthValidation = {
  firstName: {
    min: 2,
    max: 20,
  },
  lastName: {
    min: 2,
    max: 20,
  },
  email: {
    min: 5,
    max: 50,
  },
  phoneNumber: {
    min: 7,
    max: 15,
  },
  message: {
    min: 5,
    max: 500,
  },
};

const isValueEmpty = (value: string) => {
  return value === '';
};

const isEmailValid = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const checkLength = (value: string, min: number, max: number) => {
  return value.length >= min && value.length <= max;
};

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formSubmitStatus, setFormSubmitStatus] = useState<'success' | 'error'>(
    'success'
  );
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formValid, setFormValid] = useState(initialFormValid);

  const handleContactFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    switch (name) {
      case 'firstName':
        handleFirstNameValidation(value);
        break;
      case 'lastName':
        handleLastNameValidation(value);
        break;
      case 'email':
        handleEmailValidation(value);
        break;
      case 'phoneNumber':
        handlePhoneNumberValidation(value);
        break;
      case 'message':
        handleMessageValidation(value);
        break;
      default:
        break;
    }
  };

  const handleContactFormSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (Object.values(formValid).every(Boolean)) {
      setIsFormSubmitting(true);

      const res = await fetch('/api/email', {
        body: JSON.stringify({
          ...formData,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (!res.ok) {
        setFormSubmitStatus('error');
        alert('There was an error sending your message. Please try again.');
      } else {
        setFormSubmitStatus('success');
        setFormData(initialFormData);
        setFormValid(initialFormValid); // Reset form validation
        alert('Your message has been sent successfully!');
      }

      setIsFormSubmitting(false);
      setIsFormSubmitted(true);
    }
  };

  const handleFirstNameValidation = (value: string) => {
    let isError = false;

    if (isValueEmpty(value)) {
      isError = true;
      setFormErrors((prev) => ({
        ...prev,
        firstName: 'First name is required',
      }));
    } else if (
      !checkLength(
        value,
        lengthValidation.firstName.min,
        lengthValidation.firstName.max
      )
    ) {
      isError = true;
      setFormErrors((prev) => ({
        ...prev,
        firstName: `First name must be between ${lengthValidation.firstName.min} and ${lengthValidation.firstName.max} characters long`,
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        firstName: '',
      }));
    }

    setFormValid((prev) => ({
      ...prev,
      firstName: !isError,
    }));
  };

  const handleLastNameValidation = (value: string) => {
    let isError = false;

    if (isValueEmpty(value)) {
      isError = true;
      setFormErrors((prev) => ({
        ...prev,
        lastName: 'Last name is required',
      }));
    } else if (
      !checkLength(
        value,
        lengthValidation.lastName.min,
        lengthValidation.lastName.max
      )
    ) {
      isError = true;
      setFormErrors((prev) => ({
        ...prev,
        lastName: `Last name must be between ${lengthValidation.lastName.min} and ${lengthValidation.lastName.max} characters long`,
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        lastName: '',
      }));
    }

    setFormValid((prev) => ({
      ...prev,
      lastName: !isError,
    }));
  };

  const handleEmailValidation = (value: string) => {
    let isError = false;

    if (isValueEmpty(value)) {
      isError = true;
      setFormErrors((prev) => ({
        ...prev,
        email: 'Email is required',
      }));
    } else if (!isEmailValid(value)) {
      isError = true;
      setFormErrors((prev) => ({
        ...prev,
        email: 'Email is not valid',
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        email: '',
      }));
    }

    setFormValid((prev) => ({
      ...prev,
      email: !isError,
    }));
  };

  const handlePhoneNumberValidation = (value: string) => {
    let isError = false;

    if (isValueEmpty(value)) {
      isError = true;
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: 'Phone number is required',
      }));
    } else if (
      !checkLength(
        value,
        lengthValidation.phoneNumber.min,
        lengthValidation.phoneNumber.max
      )
    ) {
      isError = true;
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: `Phone number must be between ${lengthValidation.phoneNumber.min} and ${lengthValidation.phoneNumber.max} characters long`,
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: '',
      }));
    }

    setFormValid((prev) => ({
      ...prev,
      phoneNumber: !isError,
    }));
  };

  const handleMessageValidation = (value: string) => {
    let isError = false;

    if (isValueEmpty(value)) {
      isError = true;
      setFormErrors((prev) => ({
        ...prev,
        message: 'Message is required',
      }));
    } else if (
      !checkLength(
        value,
        lengthValidation.message.min,
        lengthValidation.message.max
      )
    ) {
      isError = true;
      setFormErrors((prev) => ({
        ...prev,
        message: `Message must be between ${lengthValidation.message.min} and ${lengthValidation.message.max} characters long`,
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        message: '',
      }));
    }

    setFormValid((prev) => ({
      ...prev,
      message: !isError,
    }));
  };

  return (
    <div>
      <form
        className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
        onSubmit={handleContactFormSubmit}
      >
        <h1 className='text-accent text-4xl'>Let's work together</h1>
        <p className='text-white/60'>
          Looking to bring your web projects to life? I’m here to help! With a
          knack for creating responsive, user-friendly websites, I'm all about
          making your vision a reality. Whether you need a new site, a redesign,
          or some custom features, let’s chat. Together, we can create an online
          presence that truly stands out. Drop me a message, and let's start
          building something amazing together!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='First name'
            required
            value={formData.firstName}
            onChange={handleContactFormChange}
            className={classNames(
              !formValid.firstName && formErrors.firstName.length > 0
                ? 'bg-red-200 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'
                : 'flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none'
            )}
          />
          <Input
            type='text'
            name='lastName'
            id='lastName'
            placeholder='Last name'
            required
            value={formData.lastName}
            onChange={handleContactFormChange}
            className={classNames(
              !formValid.lastName && formErrors.lastName.length > 0
                ? 'bg-red-200 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'
                : 'flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none'
            )}
          />
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            required
            value={formData.email}
            onChange={handleContactFormChange}
            className={classNames(
              !formValid.email && formErrors.email.length > 0
                ? 'bg-red-200 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'
                : 'flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none'
            )}
          />
          <Input
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            placeholder='123-123-1234'
            required
            pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
            value={formData.phoneNumber}
            onChange={handleContactFormChange}
            className={classNames(
              !formValid.phoneNumber && formErrors.phoneNumber.length > 0
                ? 'bg-red-200 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'
                : 'flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none'
            )}
          />
        </div>
        <Select>
          <SelectTrigger aria-label='Choose a Service' className='w-full'>
            <SelectValue placeholder='Choose a service' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Choose a service</SelectLabel>
              <SelectItem value='webDev'>Web Development</SelectItem>
              <SelectItem value='ui-ux'>UI/UX Design</SelectItem>
              <SelectItem value='seo'>SEO Optimization</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Textarea
          name='message'
          id='message'
          value={formData.message}
          onChange={handleContactFormChange}
          placeholder='Enter your message...'
          required
          className={classNames(
            !formValid.message && formErrors.message.length > 0
              ? 'bg-red-200 h-[200px] border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'
              : 'h-[200px] flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:ring-1 focus:border-accent focus-visible:ring-accent  focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-100'
          )}
        />
        <Button
          type='submit'
          size='md'
          className={classNames(
            !formValid.firstName ||
              !formValid.lastName ||
              !formValid.email ||
              !formValid.phoneNumber ||
              !formValid.message
              ? 'bg-gray-400 cursor-not-allowed max-w-40 p-3'
              : 'max-w-40 p-3'
          )}
          disabled={
            !formValid.firstName ||
            !formValid.lastName ||
            !formValid.email ||
            !formValid.phoneNumber ||
            !formValid.message
          }
          onClick={handleContactFormSubmit}
        >
          {isFormSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
  
    </div>
  );
};

export default Form;

