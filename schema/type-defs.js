const { gql } = require("apollo-server");

const typeDefs = gql`
  type Netflix {
    age_certification: String
    description: String
    genres: [String]
    id: Int
    imdb_score: Float
    production_countries: [String]
    release_year: Int
    runtime: Int
    title: String
    type: String
  }

  input NetflixInput {
    age_certification: String
    description: String
    genres: [String]
    id: Int
    imdb_score: Float
    production_countries: [String]
    release_year: Int
    runtime: Int
    title: String
    type: String
  }
      input UpdateNetflixInput {
    description: String
    genres: [String]
    imdb_score: Float
    runtime: Int
  }

  type Query {
    getAllNetflixes: [Netflix]
    getNetflixByTitle(title: String!): Netflix
  }

  type Mutation {
    createNetflix(input: NetflixInput): Netflix
    updateNetflix(title: String!, input: UpdateNetflixInput): Netflix
    deleteNetflix(title: String!): String
  }
`;

module.exports = { typeDefs };
