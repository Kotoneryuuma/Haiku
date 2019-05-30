//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/haikues', controller.index)
    app.get ( '/haikues/:id' , controller.show );
    app.post ( '/haikues' , controller.add );
    app.put( '/haikues/:id' , controller.updt );
    app.delete( '/haikues/:id' , controller.delete );
    app.put ( '/haikues/:id/reviews' , controller.addreview );
    app.get ( '/haikues/:name' , controller.showcreater );
    app.all('*', controller.angular)
}