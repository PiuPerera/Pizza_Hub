const moongose = require("mongoose");

const pizzaSchema = new moongose.Schema({
    name: String,
    ingredients: [String],
    size: String,
    price: Number,
    availability: Boolean,
});