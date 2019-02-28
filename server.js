var express = require("express");
console.log("Let's find out what express is$$$$", express);
var app = express();
console.log("Let's find out what app is*****", app);

var session = require ("express-session");
app.use(session({secret:"abcdefghi"}))

var bp = require("body-parser");
app.use(bp.urlencoded({extended:true}));

const flash = require("express-flash");
app.use(flash());

app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

require ("./server/routes")(app)

app.listen(8000, function(){
    console.log("listening on port 8000#######");
})