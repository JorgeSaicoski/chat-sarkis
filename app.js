const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config({ path: "./config.env" });
const app = express();
const port = process.env.PORT || 5000;
const db = require("./db/conn");

const messagesRoutes = require("./routes/messages")


const allowlist = [
    'http://sarkis.dev',
    'http://chat.sarkis.dev'
];
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    let isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1;
    if (isDomainAllowed) {
        corsOptions = { origin: true }
    } else {
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate));

app.use(helmet());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



app.use('/messages', messagesRoutes);

app.get('/', (req, res) => {
    res.send(`${process.env.DB_URI}`)
});


app.use(function(req, res, next) {
    const err = new Error('Not Found');
    res.status(404).send('Service Not Found 404');
    err.status = 404;
    next(err);
});
const server = app.listen(port, () => {
    console.log('Server is up and running at port: ' + port);
});