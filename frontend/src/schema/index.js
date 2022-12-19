import {gql} from "@apollo/client"

export const loginStatus= gql`
query Login($input: CheckUser!) {
    login(input: $input) {
      status
    }
  }
`
export const generateUser= gql`
mutation Mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      city
      email
      gender
      password
      username
    }
  }`