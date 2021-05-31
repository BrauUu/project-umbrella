const mongoose = require('../database/db');

const UmbrellaSchema = new mongoose.Schema(
    {
        brand : {
            type : String,
            required: true
        },
        size : {
            type: Number,
            required: true
        },
        height : {
            type: Number, 
            required: true
        },
        model : {
            type : String,
            required: true
        },
        colors : [{
            type : String,
            required : true
        }]
    },
    {
        versionKey : false
    }
);

const Umbrella = mongoose.model("Umbrella", UmbrellaSchema);

module.exports = Umbrella;