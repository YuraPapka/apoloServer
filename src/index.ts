import {ApolloServer} from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
// @ts-ignore
import dotenv from 'dotenv';
import data from './generateData';

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    // data,
  }),
});

server.listen({
  port: process.env.PORT || 4000
}).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
