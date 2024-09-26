const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const mongoose = require("mongoose");

const MONGODB = "mongodb+srv://sxv90080:Admin123@cluster0.kmiw8.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0";

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    return server.listen({ port: 4000 });
  })
  .then((res) => {
    console.log(`Server is running on port ${res.url}`);
  })
  .catch((err) => console.log(`error:${err}`));
