const express = require('express');
const { json } = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express();

app.disable("x-powered-by");

app.use(cors({ origin: 'http://localhost:8080' }))
app.use(json());
app.use(express.static('./web'));

module.exports = function start() {
    return app.listen(process.env.PORT, _ => {
        console.log(`Server listening on port ${process.env.PORT}`);
    });
}