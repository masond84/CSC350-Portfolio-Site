// validation.js

export const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/; // Validates a 10-digit phone number
    const plainPhone = phone.replace(/[^\d]/g, ''); // Remove non-numeric characters before validation
    return phoneRegex.test(plainPhone);
};
