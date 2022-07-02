import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl53xzhhi2x6h01up03ob6avz/master',
  cache: new InMemoryCache()
})