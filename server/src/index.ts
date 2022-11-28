import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { gqTypeDefs } from './schema'
import { mockTracks } from './mocks'

const mockResolver = {
  Query: {},
};

const resolvers = {
  Query: {
    tracksForHome: () => mockTracks
  }
}
const mocks = {
  Query: () => ({
    tracksForHome: () => mockTracks
  }),
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6
  })
}

const server = new ApolloServer({ schema: makeExecutableSchema({typeDefs: gqTypeDefs, resolvers: resolvers})
  // schema: addMocksToSchema({
  //   schema: makeExecutableSchema({typeDefs: gqTypeDefs, resolvers: mockResolver})
  // })
})
// Returns a promise, so would be await-ed, but
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(() => {
console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
})
