////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/Project');

    var ReviewSchema = new mongoose.Schema({
        commenter: {
            type: String, 
            min: 2, 
            required : [true, "User name require atleast 3 character"]},
        stars: { type: Number, required: [true], default: 0},
        review : {
            type: String,
            min: 3, 
            required : [true, "Descriotion  require atleast 3 character"]},
    }, {timestamps: true });


    

    var HaikuSchema = new mongoose.Schema({
        name: { 
            type: String, 
            min: 2, 
            required : [true, "Haiku name require atleast 2 character"]},
        haiku1: { 
            type: String,
            min: 2, 
            required : [true, " 1st section require atleast 2 character"]},
        haiku2: { 
            type: String,
            min: 2, 
            required : [true, "2nd section require atleast 2 character"]},
        haiku3: { 
            type: String,
            min: 2, 
            required : [true, "3rd section require atleast 2 character"]},
        title: { 
            type: String,
            min: 2, 
            required : [true, " Title require atleast 2 character"]},
        description : { 
            type: String,
            min: 3, 
            required : [true, " Descrioption require atleast 2 character"]},
        reviews: [ReviewSchema],
        
    },{
        timestamps : true
    });


    mongoose.model('Haiku', HaikuSchema); 
    var Haiku = mongoose.model('Haiku');

    module.exports = Haiku;