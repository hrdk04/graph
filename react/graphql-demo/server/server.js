const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

const clientOrigin = "http://localhost:5173";

app.use((req, res, next) => {
  if (req.headers.origin === clientOrigin) {
    res.setHeader("Access-Control-Allow-Origin", clientOrigin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// GraphQL schema
const schema = buildSchema(`
  type Student {
    id: ID!
    name: String!
    course: String!
    email: String!
  }

  type Query {
    students: [Student]
  }
`);

// Student data
const students = [
  {
    id: "1",
    name: "Mayur",
    course: "MCA",
    email: "mayur@example.com"
  },
  {
    id: "2",
    name: "Rahul",
    course: "BCA",
    email: "rahul@example.com"
  },
  {
    id: "3",
    name: "Priya",
    course: "BSc IT",
    email: "priya@example.com"
  }
];

// Resolver
const root = {
  students: () => students
};

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log(
    "GraphQL server running at http://localhost:4000/graphql"
  );
});