const express = require('express');

const app = express();

const dataFile = require('./data/data.json');

app.set('appData', dataFile)
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static('assets'));
app.use(require('./routes/home'));
// app.use(require('./routes/artists.js'))

// app.get("*", (req, res)=> {
//     res.send("You have reached the end of the internet.");
// });

// Dynamic Route for Artist Pages
// app.get('/routes/:id', function(req , res){
//     res.render('artist' + req.params.id);
// });



// Runs app by typing "nodemon nameOfFile.js"
app.listen(3000, ()=> {
    console.log('running on port 3000')
})