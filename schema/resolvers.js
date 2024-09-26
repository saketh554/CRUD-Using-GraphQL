const Netflix = require("../models/netflix");

const resolvers = {
  Query: {
   
    getAllNetflixes: async () => {
      return await Netflix.find();
    },
   
    getNetflixByTitle: async (_, { title }) => {
      return await Netflix.findOne({ title });
    }
  },
  Mutation: {
   
    createNetflix: async (_, { input }) => {
      const newNetflix = new Netflix(input);
      await newNetflix.save();
      return newNetflix;
    },
   
    updateNetflix: async (_, { title, input }) => {
        return await Netflix.findOneAndUpdate(
          { title }, 
          { $set: input }, 
          { new: true } 
        );
      },
   
    deleteNetflix: async (_, { title }) => {
      await Netflix.findOneAndDelete({ title });
      return `Movie or show titled "${title}" was deleted.`;
    }
  }
};

module.exports = { resolvers };
