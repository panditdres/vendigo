const { expect } 	= require('chai');
const request 		= require('request');
const rp 			= require('request-promise');
const cheerio 		= require('cheerio');
const BooksHelper 	= require('../server/books/books.helper');

describe(`getBookByTitle`, function() {
	it(`should filter the books array from the api call and return based on what the title input was`, cb => {

		let search = 'odyss';

        let query = {string : search, books : booksAuthor};

		BooksHelper.getBookByTitle(query,resp => {
			let result = resp.data;

			expect(result).to.have.lengthOf(1);
			expect(result[0].info.title).to.equal('The Odyssey of Homer');

			return cb();
		})
		
	})
})

describe(`getBookByOLID`, function() {
	it(`should filter the books array from the api call and return based on what the title input was`, cb => {

		let search = 'OL24180';

        let query = {string : search, books : booksAuthor};

		BooksHelper.getBookByOLID(query,resp => {
			let result = resp.data;

			expect(result).to.have.lengthOf(1);
			expect(result[0].info.title).to.equal('The Odyssey of Homer')

			return cb();
		})
	})
})

describe('getBooksByAuthor', function(){
	it('should retrieve the books by the name of the authors', cb => {
		
		let search = 'Dickens';
		
		let query = { string : search, books : booksAuthor };
			
		BooksHelper.getBooksByAuthor(query, resp => {
			let result = resp.data;
			
			expect(result).to.have.lengthOf(2);

			return cb();
		})

	})
})

const booksAuthor = [{
	"book": "OLID:OL24364628M",
	"info":{ authors: [{"name":"Charles Dickens"}], "title": "Great Expectations", }
	
},{
	"book" : "OLID:OL24347578M",
	"info" : {by_statement : "By Charles Dickens", "title": "The adventures of Oliver Twist",}
},{
	"book" : "OLID:OL24180216M",
	"info" : { authors: [{"name": "Homer"}], "title": "The Odyssey of Homer", }
}]

