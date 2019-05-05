const express = require('express');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan')

const songs = [
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

const exists = require('util').promisify(fs.exists);

router.get('/:name', async (req, res) => {
    try {
        const songPath = `${__dirname}/playlist/${req.params.name}.mp3`;

        if (await exists(songPath)) {

            const stream = fs.createReadStream(songPath);

            stream.on('end', () => res.end());
            return stream.pipe(res);
        }
        
        res.status(404).end();
    } catch (error) {
        console.error(error);
    }
});

const app = express();

var http = require('http');
var server = http.Server(app);

app.use(cors());
app.use(morgan('combined'));
app.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
    console.log(`Server running on ${PORT}`);
});