const express = require('express');

const router = express.Router();

var data = require('../data/data.json')



router.get('/kendrick', (req, res)=>{

    var artist1 = data.artist[0];
    var html = "";

    artist1.forEach((item)=>{

        html += `
            <li>
                <h2>${item.name}</h2>
                <img src='/profile/${item.profile}'>
                <p>${item.bio}</p>
                <h4>Albums</h4>
                    <ul>${item.album_title[0]} <img src='/images/${item.artwork[0]}'></ul>
                    <ul>${item.album_title[1]} <img src='/images/${item.artwork[1]}'></ul>
                    <ul>${item.album_title[2]} <img src='/images/${item.artwork[2]}'></ul>
                    <ul>${item.album_title[3]} <img src='/images/${item.artwork[3]}'></ul>
                    <ul>${item.album_title[4]} <img src='/images/${item.artwork[4]}'></ul>
            </li>
        `
        console.log()
    })
    console.log(html)
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