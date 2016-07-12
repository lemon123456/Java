'use strict';

app.service('bookService', function($http) {
    this.getBooks = function (page, callback) {
        $http.get('/books?page=' + page).success(function (books) {
            angular.forEach(books, function (book) {
                formatBook(book);
            });
            callback(books);
        });
    };

    this.getBook = function (id, callback) {
        $http.get('/books/' + id).success(function (book) {
            formatBook(book);
            callback(book);
      });
    };

    function formatBook(book){
        book.author = book.author.replace('["', '').replace('", "', ', ').replace(']"', '');
        book.isbn = book.isbn.replace('["', '').replace('"]', '');
    }
});