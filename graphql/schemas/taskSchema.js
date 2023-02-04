const { gql } = require("apollo-server-express");

exports.taskSchema = gql`
    type Task {
        title: String
        status: String
        _id: ID
        time : String
        createdAt: String
        updatedAt: String

    }

    type Query {
        getAllTask:[Task]
        getSingleTask(id:ID!):Task

    }

    input TaskMutation {
        title: String
        status: String
        time : String
    }

    type Mutation{
        addTask(title: String!, time: String!):Task
        editTask(id:ID!, data:TaskMutation): Task
        deleteTask(id: ID!): Boolean!
    }
`;
