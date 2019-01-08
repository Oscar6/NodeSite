const express = require('express');

const router = express.Router();

var data = require('../data/data.json')



router.get('/site', (req, res)=>{

    var artistData = data.artist;
    var html = "";

    artistData.forEach((item)=>{

        html += `
            <li>
                <h2>${item.name}</h2>
                <img src='/profile/${item.profile}'>
                <p>${item.bio}</p>
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