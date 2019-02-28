const Dashboard= require('./models');

module.exports = {

    home: function (req, res){
        Dashboard.find({})
        .then(userData => res.render('index', {users: userData}))
        .catch(err => res.json(err))
    },
}
    
