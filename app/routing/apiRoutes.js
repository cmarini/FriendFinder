// var path = require('path');
var friends = require('../data/friends');


module.exports = function(app) {
    app.get('/api/friends' , (req, res) => {
        res.send(friends);
    });

    app.post('/api/friends', (req, res) => {
        console.log("Receiving survey data");
        console.log(req.body);
        res.redirect('back');
    });
}