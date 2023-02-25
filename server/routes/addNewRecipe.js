const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Recipe = require('../models/NewRecipe');

router.post("/api/addNewRecipe", async(req, res) => {

    // console.log(req.body.title);
    try{

        const newRecipe = await Recipe.create({
            title: req.body.title,
            author: req.body.author,
            image: {
                url: req.body.url,
                type: req.body.type
            },
            ingredients: req.body.ingredients,
            directions: req.body.directions
        })

        res.status(201).json({
            status: "Success",
            newRecipe
        })
    }
    catch(e){
        res.status(500).json({
            message: e.message
        })
    }
})

module.exports = router;