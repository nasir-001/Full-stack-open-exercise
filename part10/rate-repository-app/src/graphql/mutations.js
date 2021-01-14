import { gql } from 'apollo-boost';

export const AUTHORIZE_USER = gql`
  mutation Authorize($input: AuthorizeInput) {
    authorize(credentials: $input) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview( $repoOwnerName: String!, $repoName: String!, $rating: Int!, $review: String! ) {
    createReview( review: { ownerName: $repoOwnerName, repositoryName: $repoName, rating: $rating, text: $review } ) {
      repositoryId
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      username
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview( $id: ID! ) {
    deleteReview( id: $id )
  }
`;