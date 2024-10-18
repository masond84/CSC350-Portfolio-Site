// ContactForm.jsx

import React, { useState } from 'react';
import InputField from './InputField';
import TextArea from './TextArea';
import { isValidEmail, isValidPhoneNumber } from '../utils/validation';

const ContactForm = () => {
    // State variables to hold form data and submission status
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState(null);
    const [formError, setFormError] = useState(null);
    const [invalidFields, setInvalidFields] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        message: false
    });

    // Phone formatting function
    const formatPhoneNumber = (value) => {
        if (!value) return value;

        // Remove all non-digit characters
        const phoneNumber = value.replace(/[^\d]/g, '');

        // Format the phone number
        const phoneLength = phoneNumber.length;

        if (phoneLength < 3) {
            return `🇺🇸 (${phoneNumber}`;
        } else if (phoneLength < 6) {
            return `🇺🇸 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        } else if (phoneLength < 11) {
            return `🇺🇸 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
        } else {
            return `🇺🇸 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
        }
    };

    // Handler for form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Track if the delete key was pressed
        const isDelete = e.nativeEvent.inputType === 'deleteContentBackward';

        // Format the phone number field
        if (name === 'phone') {
            if (isDelete) {
                // Remove the last digit (ignoring non-numeric characters)
                const currentDigits = formData.phone.replace(/[^\d]/g, '');
                const newDigits = currentDigits.slice(0, -1); // Remove the last digit
                setFormData((prevData) => ({
                    ...prevData,
                    phone: formatPhoneNumber(newDigits),
                }));
            } else {
                // Handle normal input changes
                setFormData((prevData) => ({
                    ...prevData,
                    phone: formatPhoneNumber(value),
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }

        // Clear form errors when input changes and reset invalid fields
        setFormError(null);
        setInvalidFields((prev) => ({ ...prev, [name]: false }));
    };

    // Function to validate the contact form
    const validateContactForm = () => {
        const { firstName, lastName, email, phone, message } = formData;
        let isValid = true;
        const newInvalidFields = {
            firstName: false,
            lastName: false,
            email: false,
            phone: false,
            message: false
        };

        // Check if required fields (firstName, lastName, email, message) are empty or invalid
        if (!firstName) {
            newInvalidFields.firstName = true;
            isValid = false;
        }
        if (!lastName) {
            newInvalidFields.lastName = true;
            isValid = false;
        }
        if (!email || !isValidEmail(email)) {
            newInvalidFields.email = true;
            isValid = false;
        }
        if (!message) {
            newInvalidFields.message = true;
            isValid = false;
        }

        // If the phone number field is not empty, check if it's valid
        if (phone && !isValidPhoneNumber(phone)) {
            newInvalidFields.phone = true;
            isValid = false;
        }

        setInvalidFields(newInvalidFields);

        if (!isValid) {
            setFormError('Please fill in all required fields.');
        }

        return isValid;
    };

    // Async function to simulate sending form data
    const submitForm = async (data) => {
        try {
            setIsSubmitting(true);
            setFormStatus(null);
            setFormError(null);

            // Validate the form before submission
            if (!validateContactForm()) {
                setIsSubmitting(false);
                return;
            }

            // Simulate an async API request to send the form
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating network delay

            setFormStatus('Message sent successfully!');
            // Reset the form fields
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isSubmitting) {
            submitForm(formData);
        }
    };

    return (
        <form className="flex flex-col gap-[14px] w-full" onSubmit={handleSubmit}>
            {/* Names */}
            <div className="flex flex-col lg:flex-row gap-[14px] w-full">
                {/* First Name */}
                <InputField
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    invalid={invalidFields.firstName}
                />

                {/* Last Name */}
                <InputField
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    invalid={invalidFields.lastName}
                />
            </div>

            {/* Email */}
            <InputField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                invalid={invalidFields.email}
            />

            {/* Phone */}
            <InputField
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                invalid={invalidFields.phone}
            />

            {/* Message */}
            <TextArea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                invalid={invalidFields.message}
            />

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="flex flex-row justify-center items-center gap-[10px] px-[10px] py-[12px] w-full bg-gradient-to-r from-[#5D5A88] to-[#8D8BA7] rounded-[5px]"
            >
        <span className="text-white text-[15px] font-medium leading-[18px] tracking-[-0.01em]">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </span>
            </button>

            {/* Form Error */}
            {formError && (
                <p className="text-red-500 text-[15px] mt-1">{formError}</p>
            )}

            {/* Form Status */}
            {formStatus && (
                <p className={`text-[15px] font-medium mt-2 ${formStatus.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                    {formStatus}
                </p>
            )}
        </form>
    );
};

export default ContactForm;