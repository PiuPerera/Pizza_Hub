const express = require('express');
const mongoose = require("mongoose");
const customeMiddleware_01 = require("./middlewear/customeMiddleware_01");
const customeMiddleware_02 = require("./middlewear/customeMiddleware_02");
const pizzas = require("./routes/products/pizzas");
const home = require("./routes/products/home");
const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost/pizzahub", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to DB succesfully..."))
.catch(err => console.log("Can not connect to DB error :", err));

app.use(express.json());

app.use(customeMiddleware_01);
app.use(customeMiddleware_02);
app.use("/", home);
app.use("/api/pizzahub/products",pizzas);



app.listen(PORT, () => {
    console.log("Started listning on port"+PORT);
});