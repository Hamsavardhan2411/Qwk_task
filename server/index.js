const {ApolloServer}= require("apollo-server")
const {resolvers} = require("./resolvers/index")
const {typeDefs} = require ("./schema/index")
const server = new ApolloServer({ resolvers, typeDefs });
  

server.listen().then(({ url }) => {
    console.log(`YOUR API IS RUNNING AT: ${url} :)`);
  });

