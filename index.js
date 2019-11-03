import express, { static } from 'express';
var app = express();
app.use(static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000);

app.get('/', function(req, res) {
    res.render('index');
});