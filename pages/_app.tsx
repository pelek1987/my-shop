import { AppProps } from "next/app";
import {QueryClient, QueryClientProvider} from "react-query";
import "../styles/globals.css";

const client = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
  );
};

export default MyApp;
