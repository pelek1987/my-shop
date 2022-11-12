import {ApolloClient, InMemoryCache} from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/claa7qfb605xd01uj30cw8pnv/master',
    cache: new InMemoryCache()
})