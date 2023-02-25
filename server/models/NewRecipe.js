const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {type:String},
    author: {type:String},
    image: {
        url: {type:String},
        type: {type: String}
    },
    ingredients: {type: [String]},
    directions: {type: String},
    user : {type : mongoose.Schema.Types.ObjectId, ref: "User"}
})

const recipeModel = new mongoose.model("Recipe", recipeSchema);

module.exports = recipeModel;