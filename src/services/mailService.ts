import mailerApi from "../api/mailerApi";
import { PropsContactForm } from "../interfaces/contact/IForm";

export const sendMail = (data: PropsContactForm) => {
    return mailerApi.post('/api/service/mailer/send', {
        email: data.email,
        name: data.name,
        message: data.message,
        topic: data.topic
    });
}