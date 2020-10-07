// import GraphQLDate from 'graphql-iso-date';
// import {GraphQLTypeResolver} from "graphql";
// import {Resolvers} from '@apollo/server';
import { GraphQLDate } from 'graphql-scalars';

import data from './generateData';

const resolvers: any = {
  Date: GraphQLDate,
  Query: {
    customers: async () => data.customers,
    categories: async () => data.categories,
    products: async () => data.products,
    commands: async () => data.commands,
    invoices: async () => data.invoices,
    reviews: async () => data.reviews,
  },
  // Mutation: {
  //
  // },
};

export default resolvers;
