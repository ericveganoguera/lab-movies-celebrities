//  Add your code here
const { Schema, model } = require("mongoose");

const movieSchema = {
  title: String,
  genre: String,
  plot: String,
  cast: [{
    type: Schema.Types.ObjectId,
    ref: "Celebrity",
  }]
};

module.exports = model("Movie", movieSchema);