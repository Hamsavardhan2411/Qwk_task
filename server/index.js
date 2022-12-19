const {ApolloServer}= require("apollo-server")
// import { resolvers } from "./resolvers/index.js";
const {resolvers} = require("./resolvers/index")
// import { typeDefs } from "./schema/index.js";
const {typeDefs} = require ("./schema/index")
// const server = new ApolloServer({
//     resolvers
//   });
  
 



// const prisma = new PrismaClient();
const server = new ApolloServer({ resolvers, typeDefs });
  

server.listen().then(({ url }) => {
    console.log(`YOUR API IS RUNNING AT: ${url} :)`);
  });

