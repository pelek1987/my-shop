import {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "../styles/globals.css";
import {Layout} from "../components/Layout";
import {DefaultSeo} from "next-seo";
import SEO from '../next-seo.config';
import { CartContextProvider } from "../components/Cart";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "../graphql/apolloClient";

const client = new QueryClient();

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <div>
            <DefaultSeo {...SEO} />
            <CartContextProvider>
                <Layout>
                    <ApolloProvider client={apolloClient}>
                        <QueryClientProvider client={client}>
                            <Component {...pageProps} />
                        </QueryClientProvider>
                    </ApolloProvider>
                </Layout>
            </CartContextProvider>
        </div>
    );
};

export default MyApp;
