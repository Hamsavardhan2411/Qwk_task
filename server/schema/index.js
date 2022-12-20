const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    city: String!
    gender: String!
    password: String!
  }
 type Query {
    helloworld : String!
 }
  input CheckUser {
    email: String!
    password: String!
  }
  type JWT {
    token: String
  }
  input CreateUserInput {
    username: String!
    email: String!
    city: String!
    gender: String!
    password: String!
  }
  input updatedUser{
    username: String!
    email: String!
    city: String!
    gender: String!
    password: String!
    oldEmail: String!
  }
  type Mutation {
    createUser(input: CreateUserInput!): JWT
    login(input: CheckUser!): JWT
    updateUser(input: updatedUser!): User
  }
`;

module.exports = {
  typeDefs,
};