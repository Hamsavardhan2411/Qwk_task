import {gql} from "@apollo/client"

export const loginStatus= gql`
mutation Mutation($input: CheckUser!) {
  login(input: $input) {
    token
  }
}`
export const generateUser= gql`
mutation Mutation($input: CreateUserInput!) {
    createUser(input: $input) {
     token
    }
  }`