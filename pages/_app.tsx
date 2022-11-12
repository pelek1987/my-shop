import {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "../styles/globals.css";
import {Layout} from "../components/Layout";
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import { CartContextProvider } from "../components/Cart";

const client = new QueryClient();

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <div>
            <DefaultSeo {...SEO} />
            <CartContextProvider>
                <Layout>
                    <QueryClientProvider client={client}>
                        <Component {...pageProps} />
                    </QueryClientProvider>
                </Layout>
            </CartContextProvider>
        </div>
    );
};

export default MyApp;
