import {useMutation} from "@tanstack/react-query";

export const useSubscribeToNewsletterMutation = () => {
    const {mutate } = useMutation(['subscribe-to-newsletter'], async ({email}: {email: string}) => {
        await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/newsletter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
    })

    return {
        mutate
    }
}