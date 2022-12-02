import {NextApiRequest, NextApiResponse} from "next";
export const subscribeToNewsletter = async (req: NextApiRequest, res: NextApiResponse) => {
    const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;
    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;

    if(!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
        return res.status(500).json({ message: 'Environment variables are not set.'})
    }

    const {email} = req.body;

    if (!email || typeof email !== 'string') {
        return res.status(400).json({})
    }

    const mailerLiteResponse = await fetch(`https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'X-MailerLite-ApiKey': MAILERLITE_API_KEY
        },
        body: JSON.stringify({
            email,
        })
    });

    if (!mailerLiteResponse.ok) {
        res.status(500).json({
            error: {
                message: 'During subscribing to newsletter error has occured'
            }
        })
    }

    return res.status(201).json({
        message: 'Subscription to newsletter succeed'
    })
}