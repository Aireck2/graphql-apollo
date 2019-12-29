import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="mt-5">
        <h1 className="text-center">SpaceX</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
