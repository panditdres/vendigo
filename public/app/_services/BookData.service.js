(function () {
    "use strict";
    angular.module('BookShop').factory('BookData', bookData);

    function bookData($http, $localStorage, $q, $rootScope, ngToast) {
        const apiUrl = '/api/v1/';

        let books = [];
       
        return {
            getBooks,
            getBookByOLID,
            getBookByTitle,
            books: () => books,
        };

        /****________********_______********________****/

        function getBooks(){
            return $http.get(apiUrl + 'getBooks')
            .then(resp => {
                // console.log(resp, 'resp')
                books = resp.data;
                return books;
            })
        }

        function getBookByOLID(dataObj){
            return $http.post(apiUrl + 'getBookByOLID', dataObj)
            .then(resp => {
                console.log(resp, 'get books olid')
                return resp.data;
            })
        }

        function getBookByTitle(dataObj){
            return $http.post(apiUrl + 'getBookByTitle', dataObj)
            .then(resp => {
                console.log(resp, 'get books title')
                return resp.data;
            })
        }
    }
})();