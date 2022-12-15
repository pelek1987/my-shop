import {NextApiHandler} from "next";
import { StripeWebhookEvents } from "../../types/stripe-events";

const handler: NextApiHandler = (req, res) => {
    const stripeEvents = req.body as StripeWebhookEvents;

    switch(stripeEvents.type) {
        case 'checkout.session.completed':
            // @TODO zaktualizuj zamówienie w GraphCMS
            return;
    }

    res.status(204).json({});
}

export default handler;