import * as yup from "yup";

yup.setLocale({
    mixed: {
        required: 'Pole jest wymagane.'
    },
    string: {
        email: 'Adres e-mail jest nieprawidłowy.'
    }
});

const checkoutFormDataSchema = yup.object().shape({
    emailAddress: yup.string().email().required(),
    nameOnCard: yup.string().required(),
    cardNumber: yup.string().required(),
    expirationDate: yup.string().required(),
    cvc: yup.string().required(),
    company: yup.string().required(),
    address: yup.string().required(),
    apartment: yup.string().required(),
    city: yup.string().required(),
    region: yup.string().required(),
    postalCode: yup.string().required(),
    sameAsShipping: yup.boolean().required(),
}).required();

export type CheckoutFormDataType = yup.InferType<typeof checkoutFormDataSchema>;
export default checkoutFormDataSchema;