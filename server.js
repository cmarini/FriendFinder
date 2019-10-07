var express = require('express');
var app = express();
var path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



let PORT = 3000;


app.post('/surveySubmit', (req, res) => {
    console.log("Receiving survey data");
    console.log(req.body);
    res.redirect('back');
});


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});