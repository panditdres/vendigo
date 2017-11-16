'use strict';

const request 		= require('request');
const rp 			= require('request-promise');
const cheerio 		= require('cheerio');
const _				= require('lodash');
const util			= require('util');

module.exports = {
	getBookByTitle 	: getBookByTitle,
	getBookByOLID 	: getBookByOLID,
	getBooksByAuthor: getBooksByAuthor
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

	// let filter = books.filter(x => {return str === x.book.substring(5);})
	
	//x.book = OLID:OL335348
	let filter = books.filter(x => {
		return _.includes(x.book.substring(5),str)
	})
	// console.log(filter.length,'filter')

	return callback({error : false, data : filter });

}

function getBooksByAuthor(details, callback){
	
	let books = details.books;
	let str   = details.string;
	
	console.log(books[0].info.authors,'books')
	
	// console.log(util.inspect(util, { showHidden: true, depth: null }));
	
	let filter = books.filter(x => {
		if(x.info.authors && x.info.authors[0]){
			return _.includes(x.info['authors'][0].name,str)
		} else {
			return _.includes(x.info.by_statement,str)
		}
	
	})

	return callback({error : false, data : filter });
}