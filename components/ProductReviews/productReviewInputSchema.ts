import * as yup from "yup";

yup.setLocale({
    mixed: {
        required: 'Pole jest wymagane.'
    },
    string: {
        email: 'Adres e-mail jest nieprawidłowy.'
    }
});

const productReviewFormInputSchema = yup.object().shape({
    headline: yup.string().required(),
    rating: yup.number().min(1).max(5).integer(),
    content: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
}).required();

export type ProductReviewsFormInputType = yup.InferType<typeof productReviewFormInputSchema>;
export default productReviewFormInputSchema;