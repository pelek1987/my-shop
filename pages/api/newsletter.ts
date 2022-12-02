import {NextApiHandler} from "next";
import {subscribeToNewsletter} from "../../services/newsletter.service";

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).setHeader('Allow', 'POST').json({ message: `${req.method} is not allowed`})
    }
    await subscribeToNewsletter(req, res);
}
export default handler;