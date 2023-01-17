const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = 5000;


const allowlist = ['http://sarkis.dev','http://chat.sarkis.dev'];
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    let isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1;
    if (isDomainAllowed) {
        // Enable CORS for this request
        corsOptions = { origin: true }
    } else {
        // Disable CORS for this request
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate));

app.use(helmet());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World')
});


app.use(function(req, res, next) {
    const err = new Error('Not Found');
    res.status(404).send('Service Not Found 404');
    err.status = 404;
    next(err);
});
const server = app.listen(port, () => console.log('Server is up and running at port: ' + port));