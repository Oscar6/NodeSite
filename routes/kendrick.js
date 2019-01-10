const express = require('express');

const router = express.Router();

var data = require('../data/data.json')



router.get('/kendrick', (req, res)=>{

    var artistData = data.artist[0];
    var html;

        html = `
            <li>
                <h2>${artistData.name}</h2>
                <img src='/profile/${artistData.profile}'>
                <p>${artistData.bio}</p>
                <h4>Albums</h4>
                    <ul><i>${artistData.album_title[0]}</i> ${artistData.year[0]} <img src='/images/${artistData.artwork[0]}'></ul>
                    <ul><i>${artistData.album_title[1]}</i> ${artistData.year[1]}<img src='/images/${artistData.artwork[1]}'></ul>
                    <ul><i>${artistData.album_title[2]}</i> ${artistData.year[2]}<img src='/images/${artistData.artwork[2]}'></ul>
                    <ul><i>${artistData.album_title[3]}</i> ${artistData.year[3]}<img src='/images/${artistData.artwork[3]}'></ul>
                    <ul><i>${artistData.album_title[4]}</i> ${artistData.year[4]}<img src='/images/${artistData.artwork[4]}'></ul>
            </li>
        `
        res.send(`<ul>${html}</ul>`);
})



// router.get('/speakers/:speakerID', (req, res)=> {

//     var html;
//     var speaker = data.speakers[req.param("speakerID")]
//     console.log(speaker);
//     html = `
//         <h2>${speaker.name}</h2>
//         <img src='/images/speakers/${speaker.shortname}_tn.jpg'>

//         <p>${speaker.summary}</p>
//     `

//         res.send(`${html}`);
//     })




module.exports = router;