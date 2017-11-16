'use strict';

const request 		= require('request');
const rp 			= require('request-promise');
const cheerio 		= require('cheerio');
const _				= require('lodash');

module.exports = {
	getBookByTitle 	: getBookByTitle,
	getBookByOLID 	: getBookByOLID
}

function getBookByTitle(details, callback){	

	// console.log(details)

	let books = details.books;
	let str   = details.string;

	let filter = books.filter(x => {
		return _.includes(x.info.title.toLowerCase(), str);
	})

	return callback({error : false, data : filter })

}

function getBookByOLID(details, callback){

	let books = details.books;
	let str   = details.string;

	let filter = books.filter(x => {return str === x.book.substring(5);})

	// console.log(filter.length,'filter')

	return callback({error : false, data : filter })

}