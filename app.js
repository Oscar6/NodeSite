const express = require('express');

const app = express();

const dataFile = require('./data/data.json');

app.set('appData', dataFile)
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use('/assets', express.static(__dirname + "/assets"));
app.use(require('./routes/home'));

app.listen(3000, ()=> {
    console.log('running on port 3000')
})