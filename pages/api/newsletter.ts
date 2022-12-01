import {NextApiHandler} from "next";

const MAILERLITE_GROUP_ID = '73326932181124100'
const MAILERLITE_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYmNiYjNiZDM1YzlkOTQ1NjQ0MzU5MDNiZGFiOTdhZjBjZjU5Mzk4YjhhOTMxNTA5ZWFiZmU0NDAyODM4ZTFjMmNlMjE5ZTVmZTc3ZTQ2OTIiLCJpYXQiOjE2Njk5Mjg0NDguNzY0MzMzLCJuYmYiOjE2Njk5Mjg0NDguNzY0MzM1LCJleHAiOjQ4MjU2MDIwNDguNzU5MTgsInN1YiI6IjI2NjQ4NSIsInNjb3BlcyI6W119.YkacTJ9qeVEDvAcKfwdWR3B6geVVZUj_xoWo8TUx67AnQ6RAqnkT-B7SogVP0rnMgtLXSwae4piPaPTnpVTl3JF4_Rh2NbzaA6ul9xCg7NBWMTPQKmto3i3cf63VOY2Upm-OrOmbz7MRUOchl9i2WVms3PeIRNzhTwrV9-QjzjwoBP9Q45l4ALrDLsyjV8YeIClk8oUQJvpNj2Ka3sohvc5tobBs_jU-pG9shd8-a26Dr7sbEayEhktYjPzfh4grga0xMbQM0vAwF8mO_0LJeIXTGOjn5CvCH5AbdlVbe5uaZFoPbgblfRkj2k20ffmcyTxbHj0vOucZB8UVOR3fdUQY4AWRKP-WH8eGb-MVo9-zX6uG-683RgKA54Yj8pYHdDQ5t1SQTAU1DQB-gdepHpNmRedeDqFBzBA1GNOEmOVtODhazoPGdzM2S2w5McKZ6UX0ArQK3-Zs87AxtJQqrPm2MJbCUvRrDxFGVLTG1VeQSVdnUIELxqnBCsQUurKzq5Gyx3VSN1uhUGtYom14sDLCYctT-chf3f4TEr_qfXQTtXnIT5q2UpIEVZtlfVygtMDhwQ9I-l-55oWrsZnHc66hyEcQ0Kzh3hlqeowHw7pLXzvxR7opwQqOrl7liNEcHbVjhU2m8vp0U8FvPXAFCF5QbV6IVtOo5vavU3gKH-k'

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(200).json({})
    }
    const {email} = req.body;

    if (!email || typeof email !== 'string') {
        return res.status(400).json({})
    }

    const response = await fetch(`https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`, {
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

    if (!response.ok) {
        res.status(500).json({
            error: {
                message: 'Wystąpił błąd przy zapisie do newslettera'
            }
        })
    }

    return res.status(201).json({})
}
export default handler;