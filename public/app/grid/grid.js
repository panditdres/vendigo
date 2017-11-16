(function () {
    "use strict";
    angular.module("BookShop")
    .config(function config($stateProvider) {
        $stateProvider
        .state('home.grid', {
            url: '/',
            controller: 'GridCtrl as vm',
            templateUrl: 'app/grid/grid.html',
            data: {pageTitle: 'Home'}
        })
    })
    .controller('GridCtrl', function ($scope, $state, $rootScope, BookData) {

        let vm = this;

        console.log('grid controller on')

        // declaring functions
        vm.bookSearch   = bookSearch;
        vm.checkStr     = checkStr;

        init();

        ////////////////////////////////////////////////////////////////////////

        // function to initialise the page
        // fetch books
        function init(){
            vm.promise = BookData.getBooks()
            .then(resp => {
                console.log(resp)
                vm.books = resp;
                vm.books.forEach(book => {
                    if (book.info.authors && book.info.authors[0].name){
                        book.author = 'by ' + book.info.authors[0].name;
                    } else {
                        book.author = book.info.by_statement;
                    }
                })
                // console.log(vm.books)
            })
        }

        // function checks if the string in the input field is empty
        // if it is, reset and display all the books available
        function checkStr(){
            if(vm.search === ''){
                vm.books = BookData.books();
                return;
            }
        }

        // function used to search books by title or OLID number
        function bookSearch(str){

            if(str === ''){
                vm.books = BookData.books();
                return;
            }

            // obj to send to the backend server
            let query = {string : str, books : BookData.books()};

            if (str.toLowerCase().match("^ol") && /\d/.test(str)) {
                // console.log('OLID match')
                BookData.getBookByOLID(query)
                .then(resp => {
                    vm.books = resp;
                    // console.log(vm.books,'olid search')
                })
            } else {
                // console.log('title match')
                BookData.getBookByTitle(query)
                .then(resp => {
                    vm.books = resp;
                    // console.log(vm.books,'title search')
                })
            }
        }
    })

})();