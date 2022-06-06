// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const express = require('express')
const mongoose = require("mongoose")
const restaurantModel = require("../models/restaurantModel")

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/Travel-App";

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    // .then(() => {
    //     restaurantModel.create(restaurantsSchema)
    //         .then((responseDB) => {
    //             console.log('Our restaurants', responseDB)
    //                 //importing an array of recipes from the data.json file
    //             return restaurantModel.insertMany(data)
    //         })
    // })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });