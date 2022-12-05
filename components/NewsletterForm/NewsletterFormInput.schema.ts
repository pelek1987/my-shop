import * as yup from "yup";

yup.setLocale({
    mixed: {
        required: 'Pole jest wymagane.'
    },
    string: {
        email: 'Adres e-mail jest nieprawidłowy.'
    }
});

const newsletterFormInputSchema = yup.object().shape({
    email: yup.string().email().required(),
}).required();

export type NewsletterFormInputType = yup.InferType<typeof newsletterFormInputSchema>;
export default newsletterFormInputSchema;