'use strict';

var app = angular.module('BookishApp', ['ngRoute', 'ngResource']);
app.config(function($routeProvider){
    $routeProvider
        .when('/books', {
            templateUrl: '../views/books.html',
            controller: 'bookController'
        })
        .when('/books/:id', {
            templateUrl: "../views/bookDetail.html",
            controller: 'bookController'
        })
        .otherwise(
            { redirectTo: '/' }
        )
});