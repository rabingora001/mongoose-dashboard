const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:8000/mongoose_dashboardDB", (err)=>{
    console.log("hwllo from db#############");
});

const animalSchema = new mongoose.Schema({
    name : {type: String, required: true, minlength: 3},
    age: {type: Number, required: true},
    color: {type: String, required: true}
}, {timestamps: true})

mongoose.model('Dashboard', animalSchema);
const Dashboard = mongoose.model('Dashboard');

module.exports = Dashboard;