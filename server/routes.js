var controller = require("./controllers");

module.exports = function (app){
    app.get('/', controller.home)
}