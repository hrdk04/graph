import React from "react";
import ReactDOM from "react-dom/client";

import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { HttpLink } from "@apollo/client/link/http";

import App from "./App";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql"
  }),
  cache: new InMemoryCache()
});

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>

  </React.StrictMode>
);