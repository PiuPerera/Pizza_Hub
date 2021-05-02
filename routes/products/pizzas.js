const express = require("express");
const router = express.Router();

let PizzaArray = [
    {id: 1, name: "Pizza 1"},
    {id: 2, name: "Pizza 2"},
    {id: 3, name: "Pizza 3"},
    {id: 4, name: "Pizza 4"},
];

router.get("/", (req, res) => {
    return res.send(PizzaArray);
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

router.post("/", (req, res) => {
    if(!req.body.name){
        return res.send("Bad request").status(400);
    }
    let newPizza = {
        id: PizzaArray.length + 1,
        name: req.body.name
    }
    PizzaArray.push(newPizza);
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