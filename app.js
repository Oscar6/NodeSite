const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('assets'));

app.use(require('./routes/index.js'))
app.use(require('./routes/site.js'))
app.use(require('./routes/kendrick.js'))
// app.use(require('./routes/thestrokes.js'))
// app.use(require('./routes/party.js'))


// Runs app by typing "nodemon nameOfFile.js"
app.listen(3000, ()=> {
    console.log('running on port 3000')
})