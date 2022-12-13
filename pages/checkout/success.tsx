import {useRouter} from "next/router";

const CheckoutSuccessPage = () => {
    const {query: { session_id}} = useRouter()
    return (
        <div>
            <p>
                Payment checkout session id [{session_id}] succeed.
            </p>
        </div>
    )
}

export default CheckoutSuccessPage;