const express = require('express');

const router = express.Router();


// Populates all artists on Home page
router.get('/home', (req, res)=>{

    var data = req.app.get('appData');
    var artistInfo = data.artist;

    res.render('home', {
        pageTitle: 'Heavy Rotation Artists',
        pageID: 'home',
        artistInfo: artistInfo,
        artistID: 'index'
    });
});

// Populates an individual page for each artist
router.get('/home/:artistID', (req, res)=>{

    var data = req.app.get('appData'); 
    var artistInfo = data.artist[req.params.artistID];

    res.render('home', {
        artistInfo: artistInfo
    });
});

module.exports = router;