const mongoose = require("mongoose");
const NetflixSchema = new mongoose.Schema(
    {
        age_certification:String,
        description:String,
        genres:[String],
        id:Number,
        imdb_Score:Number,
        production_countries: [String],
        release_year: Number,
         runtime: Number,
          title: String,
         type: String
    }
);
const Netflix = mongoose.model("Netflix", NetflixSchema);

module.exports = Netflix;