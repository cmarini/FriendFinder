var path = require('path');

module.exports = function(app) {
    app.get('/survey', function (req, res) {
        console.log("serving:" + path.join(__dirname,'/../public/survey.html'));
        res.sendFile(path.join(__dirname,'/../public/survey.html'));
    });

    app.get('/*', function (req, res) {
        console.log("serving:" + path.join(__dirname,'/../public/home.html'));
        // res.sendFile(path.join(__dirname,'/../public/home.html'));
        res.send("HOME");
    });
}