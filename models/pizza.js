const moongose = require("mongoose");

const pizzaSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    ingredients: [String],
    size: {
        type: String,
        required: true,
        minlength: 3
    },
    price: {
        type: Number,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Pizza = moongose.model("PizzaHub", pizzaSchema);

module.exports = Pizza;