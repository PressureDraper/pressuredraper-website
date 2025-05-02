import { PropsContactForm } from "../../interfaces/contact/IForm";

export const defaultErrors = { 
    name: {
        error: false,
        message: 'Name is required and must be at least 2 characters long.'
    }, 
    email: {
        error: false,
        message: 'Email is required and must be a valid email address.'
    }, 
    topic: {
        error: false,
        message: 'Topic is required.'
    }, 
    message: {
        error: false,
        message: 'Message is required.'
    } 
};

export const formValidator = (payload: PropsContactForm, setErrors: (errors: typeof defaultErrors) => void) => {
    let isOk: boolean = true;

    if (!payload.message) {
        setErrors({ ...defaultErrors, message: { ...defaultErrors.message, error: true } });
        isOk = false;
    }

    if (!payload.topic) {
        setErrors({ ...defaultErrors, topic: { ...defaultErrors.topic, error: true } });
        isOk = false;
    }

    if (!payload.email || !/\S+@\S+\.\S+/.test(payload.email)) {
        setErrors({ ...defaultErrors, email: { ...defaultErrors.email, error: true } });
        isOk = false;
    }

    if (!payload.name || payload.name.length < 2) {
        setErrors({ ...defaultErrors, name: { ...defaultErrors.name, error: true } });
        isOk = false;
    }

    return isOk;
}