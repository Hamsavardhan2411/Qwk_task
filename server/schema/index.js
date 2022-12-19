const { gql }= require("apollo-server")

const typeDefs = gql `
type User {
    username : String! 
    email :String!
    city: String!
    gender: String!
    password :String!
}
type loginResponse {
    status : Boolean!
}
input CheckUser{
   email:String!
   password: String!
}
type Query {
    login(input: CheckUser!) : loginResponse!
}
type JWT {
    token : String
}
input CreateUserInput {
    username : String! 
    email :String!
    city: String!
    gender: String!
    password :String!
}
type Mutation {
    createUser(input: CreateUserInput!): User
    
  }
`;

module.exports ={
    typeDefs,
};