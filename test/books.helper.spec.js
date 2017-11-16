const { expect } 	= require('chai');
const request 		= require('request');
const rp 			= require('request-promise');
const cheerio 		= require('cheerio');
const BooksHelper 	= require('../server/books/books.helper');

// both test designed to get The Odyssey of Homer back after the filtering has been completed

describe(`getBookByTitle`, function() {
	it(`should filter the books array from the api call and return based on what the title input was`, cb => {

		// the goal of the test is to make sure that we receive the data and that it has been parsed correctly
		// search is substring of Odyssey
		let search = 'odyss';
		
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

			// data.forEach( x => {x.title = x.info.title});

			// obj to send to the backend server
            let query = {string : search, books : data};

			BooksHelper.getBookByTitle(query,resp => {
				let result = resp.data;
				// console.log(result)
				expect(result).to.deep.equal(expected);

				return cb();
			})
		})

		.catch(cb)

	})
})

describe(`getBookByOLID`, function() {
	it(`should filter the books array from the api call and return based on what the title input was`, cb => {

		// the goal of the test is to make sure that we receive the filtering of the data is done through the OLID 
		let search = 'OL24180216M';
		
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

			// data.forEach( x => {x.title = x.info.title});

			// obj to send to the backend server
            let query = {string : search, books : data};

			BooksHelper.getBookByOLID(query,resp => {
				let result = resp.data;
				// console.log(result)
				expect(result).to.deep.equal(expected);

				return cb();
			})
		})

		.catch(cb)


	})
})

const expected = [{
	        "book": "OLID:OL24180216M",
	        "info": {
	            "publishers": [
	                {
	                    "name": "Macmillan"
	                }
	            ],
	            "pagination": "xxiv, 429 p.",
	            "identifiers": {
	                "lccn": [
	                    "02022114"
	                ],
	                "openlibrary": [
	                    "OL24180216M"
	                ],
	                "oclc": [
	                    "3603319"
	                ]
	            },
	            "classifications": {
	                "lc_classifications": [
	                    "PA4025.A5 B85 1900"
	                ]
	            },
	            "links": [
	                {
	                    "url": "http://en.wikipedia.org/wiki/Odyssey",
	                    "title": "Wikipedia entry"
	                }
	            ],
	            "title": "The Odyssey of Homer",
	            "url": "https://openlibrary.org/books/OL24180216M/The_Odyssey_of_Homer",
	            "number_of_pages": 429,
	            "cover": {
	                "small": "https://covers.openlibrary.org/b/id/7104104-S.jpg",
	                "large": "https://covers.openlibrary.org/b/id/7104104-L.jpg",
	                "medium": "https://covers.openlibrary.org/b/id/7104104-M.jpg"
	            },
	            "subject_places": [
	                {
	                    "url": "https://openlibrary.org/subjects/place:belluno",
	                    "name": "Belluno"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/place:italy",
	                    "name": "Italy"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/place:troy_(extinct_city)",
	                    "name": "Troy (Extinct city)"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/place:turkey",
	                    "name": "Turkey"
	                }
	            ],
	            "subjects": [
	                {
	                    "url": "https://openlibrary.org/subjects/great_books_of_the_western_world",
	                    "name": "great_books_of_the_western_world"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_italian",
	                    "name": "Translations into Italian"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/odysseus_(greek_mythology)",
	                    "name": "Odysseus (Greek mythology)"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/italian_language",
	                    "name": "Italian language"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/readers",
	                    "name": "Readers"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/dialects",
	                    "name": "Dialects"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/accessible_book",
	                    "name": "Accessible book"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_ukrainian",
	                    "name": "Translations into Ukrainian"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/poetry",
	                    "name": "Poetry"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/fiction",
	                    "name": "Fiction"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/classical_literature",
	                    "name": "Classical literature"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/odiseo_(mitología_griega)",
	                    "name": "Odiseo (Mitología griega)"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/open_library_staff_picks",
	                    "name": "Open Library Staff Picks"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/overdrive",
	                    "name": "OverDrive"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/popular_print_disabled_books",
	                    "name": "Popular Print Disabled Books"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_french",
	                    "name": "Translations into French"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/juvenile_literature",
	                    "name": "Juvenile literature"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_in_to_english",
	                    "name": "Translations in to English"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/horses",
	                    "name": "Horses"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/trojan_war",
	                    "name": "Trojan War"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/mythology,_greek,_in_literature",
	                    "name": "Mythology, Greek, in literature"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/achilles_(greek_mythology)",
	                    "name": "Achilles (Greek mythology)"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/diseases",
	                    "name": "Diseases"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/traducciones_al_español",
	                    "name": "Traducciones al español"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/greek_mythology",
	                    "name": "Greek Mythology"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/great_books",
	                    "name": "great_books"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/criticism_and_interpretation",
	                    "name": "Criticism and interpretation"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/odysseus_(greek_mythology)_in_literature",
	                    "name": "Odysseus (Greek mythology) in literature"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/penelope_(greek_mythology)",
	                    "name": "Penelope (Greek mythology)"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/literatura_grega_clássica",
	                    "name": "Literatura grega clássica"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/greeks",
	                    "name": "Greeks"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/classic_literature",
	                    "name": "Classic Literature"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_german",
	                    "name": "Translations into German"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_catalan",
	                    "name": "Translations into Catalan"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/homer",
	                    "name": "Homer"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/greek_epic_poetry",
	                    "name": "Greek Epic poetry"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_armenian",
	                    "name": "Translations into Armenian"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/greek_gods",
	                    "name": "Greek Gods"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/hymns,_greek_(classical)",
	                    "name": "Hymns, Greek (Classical)"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/greek_poetry",
	                    "name": "Greek poetry"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/epic_poetry",
	                    "name": "Epic poetry"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_latin",
	                    "name": "Translations into Latin"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_russian",
	                    "name": "Translations into Russian"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/in_library",
	                    "name": "In library"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/literature_in_spanish",
	                    "name": "Literature in Spanish"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/calypso_(greek_mythology)",
	                    "name": "Calypso (Greek mythology)"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/greek_epic_poety",
	                    "name": "Greek Epic poety"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/greek_language",
	                    "name": "Greek language"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/odysseus_(greekmythology)",
	                    "name": "Odysseus (Greekmythology)"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_polish",
	                    "name": "Translations into Polish"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_arabic",
	                    "name": "Translations into Arabic"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_english",
	                    "name": "Translations into English"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/history_and_criticism",
	                    "name": "History and criticism"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_spanish",
	                    "name": "Translations into Spanish"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/early_works_to_1800",
	                    "name": "Early works to 1800"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/poesía",
	                    "name": "Poesía"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/poesia_épica",
	                    "name": "Poesia épica"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/protected_daisy",
	                    "name": "Protected DAISY"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/poesía_épica_griega",
	                    "name": "Poesía épica griega"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/translations_into_irish",
	                    "name": "Translations into Irish"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/greek_literature",
	                    "name": "Greek literature"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/long_now_manual_for_civilization",
	                    "name": "Long Now Manual for Civilization"
	                }
	            ],
	            "subject_people": [
	                {
	                    "url": "https://openlibrary.org/subjects/person:homer",
	                    "name": "Homer"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/person:odysseus_(greek_mythology)",
	                    "name": "Odysseus (Greek mythology)"
	                },
	                {
	                    "url": "https://openlibrary.org/subjects/person:oskar_kokoschka_(1886-)",
	                    "name": "Oskar Kokoschka (1886-)"
	                }
	            ],
	            "key": "/books/OL24180216M",
	            "authors": [
	                {
	                    "url": "https://openlibrary.org/authors/OL6848355A/Homer",
	                    "name": "Homer"
	                }
	            ],
	            "publish_date": "1900",
	            "by_statement": "done into English prose by S.H. Butcher, and A. Lang",
	            "publish_places": [
	                {
	                    "name": "London"
	                }
	            ],
	            "ebooks": [
	                {
	                    "formats": {
	                        "pdf": {
	                            "url": "https://archive.org/download/cu31924026359129/cu31924026359129.pdf"
	                        },
	                        "epub": {
	                            "url": "https://archive.org/download/cu31924026359129/cu31924026359129.epub"
	                        },
	                        "text": {
	                            "url": "https://archive.org/download/cu31924026359129/cu31924026359129_djvu.txt"
	                        }
	                    },
	                    "preview_url": "https://archive.org/details/cu31924026359129",
	                    "read_url": "https://archive.org/stream/cu31924026359129",
	                    "availability": "full"
	                }
	            ]
	        }
	    }];