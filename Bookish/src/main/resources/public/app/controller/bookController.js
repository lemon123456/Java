'use strict'

app.controller('bookController', function($scope, $routeParams, bookService) {

    getBooks(0);

    $scope.setPage = function (n) {
        $scope.currentPage = n;
        getBooks($scope.currentPage - 1);
    }

    $scope.getTotalPages = function () {
        var pages = [];
        for (var i=1; i<=$scope.totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    function getBooks(page) {
        bookService.getBooks(page,function(data){
            $scope.books = data.content;
            $scope.totalPages = data.totalPages;
        });
    }

    bookService.getBook($routeParams.id, function(data){
        $scope.book = data;
    });
});