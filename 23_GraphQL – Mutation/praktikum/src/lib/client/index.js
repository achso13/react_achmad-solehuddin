import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://trusted-pika-22.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "LdNr2bcW3L0LCEtYYqD0GI3KIx7aEobmSO88QevTQkoHraB9jK3tEMya6dBUU0ml",
  },
});

export default client;
