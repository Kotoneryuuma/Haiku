//REQUIRE STATMENTS
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
// const session = require('express-session');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./routes')(app)

//SERVER LISTEN
app.listen(8000, function(){
    console.log("Listening on post 8000")
});