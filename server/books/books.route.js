'use strict';

const BookHelper 	= require('./books.helper');
const request 		= require('request');
const rp 			= require('request-promise');
const cheerio 		= require('cheerio');

//call all routes functions with express router as the parameter
function Books_Routes(router) {
	
	// Route to get books from the url
	// GET API Call
	router.get('/getBooks', (req,res) => {

		let url = 'https://goo.gl/Lk2MTJ';

		rp(url)
		.then( (resp) => {

			// parsing the json object
			let _data 	= JSON.parse(resp);
			let data  	= [];
			let obj;

			// converting the data from the hash format into array format
			for(var type in _data){
				obj = {};
				obj.book = type;
				obj.info = _data[type];
				data.push(obj);
			}

			// send data back to the client
			res.status(200).send(data);
			// console.log(data)
			
		})
		.catch(err => {
			// error catching in case data is not coming through
			res.status(400).send(err)
		})
	})

	// Route to filter the books by OLID
	// Sending the functionality and all the heavy lifting to the BookHelper
	router.post('/getBookByOLID', (req,res) => {
		// console.log(req.body,'olid str')

		let details = req.body;

		BookHelper.getBookByOLID( details, resp => {
			if(resp.error === true){
				res.status(400).send(resp.err)
			} else {
				res.status(200).send(resp.data)
			}
		})
	})

	// Route to filter the books by Title
	// Sending the functionality and all the heavy lifting to the BookHelper
	router.post('/getBookByTitle', (req,res) => {
		// console.log(req.body,'title str')	

		let details = req.body;

		BookHelper.getBookByTitle( details, resp => {
			if(resp.error === true){
				res.status(400).send(resp.err)
			} else {
				res.status(200).send(resp.data)
			}
		})
	})

}

module.exports = Books_Routes;