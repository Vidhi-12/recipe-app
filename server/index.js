require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const connect = require('./db/connect');
const recipeModel = require('./models/NewRecipe');
const addNewRecipe = require('./routes/addNewRecipe');
const user = require("./routes/user");
const cookieParser = require('cookie-parser');
const auth = require("./middleware/auth");
const cors = require("cors");

const app = express();
const PORT = 8000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use('/', addNewRecipe);
app.use('/', user);
app.use(cors());

app.get("/secret", auth, (req,res) => {
    res.render("secret");
})

app.get("/logout", auth, async (req, res) => {
    try{
        //for single logout
        // req.user.tokens = req.user.tokens.filter((currentElement) => {
        //     return currentElement.token !== req.token;
        // })

        //logout from all devices
        req.user.tokens = [];

        res.clearCookie("jwt");
        console.log("logout successfully");
    }
    catch(error){
         res.status(401).send(error);
    }
})

const createToken = async() => {
    const token = await jwt.sign({_id:"57788999999"}, "hellobuddy",{
        expiresIn: "2 seconds"
    })
    console.log(token);

    const userVerify = await jwt.verify(token, "hellobuddy");
    console.log(userVerify);
}

createToken();

app.listen(PORT, ()=> {
    console.log(`server running at ${PORT}`);
})