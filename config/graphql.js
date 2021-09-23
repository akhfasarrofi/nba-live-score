import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_BASE_URL = `${process.env.REACT_APP_GRAPHQL_URL}`;
const HASURA_SECRET = `${process.env.REACT_APP_HASURA_SECRET}`;

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'x-hasura-admin-secret': HASURA_SECRET,
};

const client = new ApolloClient({
  uri: GRAPHQL_BASE_URL,
  headers: HEADERS,
  cache: new InMemoryCache(),
});

export default client;
