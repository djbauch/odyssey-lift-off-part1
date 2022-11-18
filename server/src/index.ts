import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gqTypeDefs } from "./schema.js";
//import { gqTypeDefs } from ;

const resolvers = {
  Query: {},
};
const server = new ApolloServer({ typeDefs: gqTypeDefs });
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
