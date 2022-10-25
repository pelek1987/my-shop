import { AppProps } from "next/app";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "../styles/globals.css";
import {Layout} from "../components/Layout";

const client = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Layout>
          <QueryClientProvider client={client}>
              <Component {...pageProps} />
          </QueryClientProvider>
      </Layout>
  );
};

export default MyApp;
