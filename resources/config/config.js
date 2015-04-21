/**
 * Created by sidahmed on 03/02/15.
 */
var app = angular.module('app', [
    'ngRoute'
]);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/application', {
                templateUrl: 'view/application.html',
                controller: 'applicationController'
            }). when('/about', {
                templateUrl: 'view/about.html',
                controller: 'applicationController'
            })
    }]);

