'use strict'

const express 		= require('express');
const app 			= express();
const bodyParser 	= require('body-parser');
const router 		= express.Router();
const cors 			= require('cors');
// =======================
// configuration =========
// =======================
// Routes
const books_route = require('./server/books/books.route');

// Initialize router
books_route(router);

// Initialize port
const port = process.env.PORT || 3000; 

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(cors());

app.use('/api/v1/', router);

app.use('/', express.static(__dirname + '/public', {redirect: false}));

const server = app.get('/*', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html');
}).listen(port);

console.log('Server running at: localhost' + port);

module.exports = app;
