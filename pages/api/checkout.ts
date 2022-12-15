import {NextApiHandler} from "next";
import {Stripe} from "stripe";
import {apolloClient} from "../../graphql/apolloClient";
import {
    GetProductBySlugDocument,
    GetProductBySlugQuery,
    GetProductBySlugQueryVariables
} from "../../graphql/generated/graphql";

const handler: NextApiHandler = async (req, res) => {
    const stripeSecterKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecterKey) {
        res
            .status(500)
            .json({message: 'Missing STRIPE_SECRET_KEY'})
        return;
    }

    const stripe = new Stripe(stripeSecterKey, {
        apiVersion: '2022-11-15'
    });

    const body = req.body as { slug: string; count: number }[]

    const products = await Promise.all(body.map(async (item) => {

        const product = await apolloClient.query<GetProductBySlugQuery, GetProductBySlugQueryVariables>({
            query: GetProductBySlugDocument,
            variables: {
                slug: item.slug,
            }
        })

        return {
            ...product,
            count: item.count
        }
    }));


    const checkoutSession = await stripe.checkout.sessions.create({
        mode: 'payment',
        locale: 'pl',
        payment_method_types: ['p24', 'card'],
        success_url: 'http://localhost:3000/checkout/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'http://localhost:3000/checkout/cancel',
        line_items: products.map(product => ({
            price_data: {
                currency: 'PLN',
                unit_amount: product.data.product!.price,
                product_data: {
                    name: product.data.product!.name,
                    images: product.data.product!.images.map(i => i.url)
                }
            },
            quantity: product.count
        }))
        // line_items: [
        //     {
        //         price_data: {
        //             currency: 'PLN',
        //             unit_amount: 2137,
        //             product_data: {
        //                 name: 'Testowy produkt',
        //             },
        //         },
        //         quantity: 3
        //     }
        // ]
    })

    res.status(201).json({session: checkoutSession})

}

export default handler;