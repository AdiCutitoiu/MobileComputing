const express = require('express');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan')

const songs = [
    /*{
        title: "Remember the Way",
        artist: "Ask Again",
    },
    {
        title: "Guardians",
        artist: "Ask Again"
    },
    {
        title: "Crusade of The Castellan",
        artist: "Ask Again",
    },*/
    {
        title: "Land of a Folk Divided",
        artist: "Ask Again",
    },
    {
        title: "An Innocent Sword",
        artist: "Ask Again",
    },
	{
        title: "Back in black",
        artist: "AC/DC",
    },
	{
        title: "Highway to Hell",
        artist: "AC/DC",
    },
	{
        title: "TNT",
        artist: "AC/DC",
    },
	{
        title: "You shook me all night long",
        artist: "AC/DC",
    }
];

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json(songs);
    } catch (error) {
        console.error(error);
    }
});

router.get('/:name', async (req, res) => {
    try {
        const songName = req.params.name.split(' ').join('_');
        
        const songPath = `${__dirname}/playlist/${songName}.mp3`;

        const stream = fs.createReadStream(songPath);

        stream.pipe(res);

    } catch (error) {
        console.error(error);
    }
});

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(router);

app.listen(3000, '0.0.0.0', ()=> {
    console.log(`Listening on port 3000`);
});