const { request } = require("express");
const express = require("express");
const Pizza = require("../models/pizza");
const router = express.Router();

let PizzaArray = [
    {id: 1, name: "Pizza 1"},
    {id: 2, name: "Pizza 2"},
    {id: 3, name: "Pizza 3"},
    {id: 4, name: "Pizza 4"},
];

router.get("/", async (req, res) => {
    try{
        let pizzas = await Pizza.find()
        return res.send(pizzas);
    }
    catch(err){
        return res.send("Error :", err.message).status(500);
    }
    
});

router.get("/:id", (req, res) => {
    let requestID = req.params.id;
    let pizza = PizzaArray.find(pizza => pizza.id == requestID);
    if(!pizza)
    {
        return res.send("The pizza you looking for dosen't available").status(404);
    }
    return res.send(pizza).status(200);
});

router.put("/:id", (req, res) => {
    let requestID = req.params.id;
    let pizza = PizzaArray.find(pizza => pizza.id == requestID);
    if(!pizza)
    {
        return res.send("The pizza you looking for dosen't available").status(404);
    }
    pizza.name = req.body.name;
    return res.send(pizza).status(200);
});

router.post("/", async (req, res) => {
    if(!req.body.name){
        return res.send("Bad request").status(400);
    }
    
    newPizza = new Pizza({
        name: req.body.name,
        ingredients: req.body.ingredients,
        size: req.body.size,
        price: req.body.price,
        availability: req.body.availability,
        imageUrl: req.body.imageUrl
    });
    newPizza = await newPizza.save();
    return res.send(newPizza).status(200);
});

router.delete("/:id", (req, res) => {
    let requestID = req.params.id;
    let pizza = PizzaArray.find(pizza => pizza.id == requestID);
    if(!pizza)
    {
        return res.send("The pizza you looking for dosen't available").status(404);
    }
    let indexOfPizza = PizzaArray.indexOf(pizza);
    PizzaArray.splice(indexOfPizza);
    return res.send(pizza).status(200);
});

module.exports = router;