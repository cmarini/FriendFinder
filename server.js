var app = require('express')();
var path = require('path');
require('./app/data/friends.js');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

let PORT = 3000;

app.get('/', function (req, res) {
    console.log("serving:" + path.join(__dirname,'/app/public/home.html'));
    res.sendFile(path.join(__dirname,'/app/public/home.html'));
});

app.get('/survey', function (req, res) {
    console.log("serving:" + path.join(__dirname,'/app/public/survey.html'));
    res.sendFile(path.join(__dirname,'/app/public/survey.html'));
});


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});