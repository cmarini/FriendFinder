// var path = require('path');
var friends = require('../data/friends');


module.exports = function(app) {
    app.get('/api/friends' , (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        console.log("Receiving survey data");
        console.log(req.body);

        var newFriend = req.body;
        var scores = newFriend.scores;

        var bestFriend;
        var minDiff;
        friends.forEach(friend => {
            var diff = 0; 
            for (var i = 0; i<scores.length; i++) {
                diff += Math.abs(scores[i] - friend.scores[i]);
            }
            console.log(`Diff with ${friend.name}: ${diff}`);
            if (minDiff === undefined || diff < minDiff) {
                minDiff = diff;
                bestFriend = friend;
            }
        });
        console.log(bestFriend);
        res.json(bestFriend);

    });
}