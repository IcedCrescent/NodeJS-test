const express = require('express');
const bodyParser = require('body-parser')
const router = require('./routers/router')

const port = process.env.PORT || 3000

const app = express();


app.use('/', router);
app.get('/', (req, res) => {
    return res.send('Go to <a href="/countries">countries</a>');
});

const server = require('http').Server(app);

server.listen(port, (req, res)=> {
    console.log('App running');
})
