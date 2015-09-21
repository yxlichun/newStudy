'use strict';

angular.module('login', [])
    .controller('TextAreaWithLimitCtrl', function ($scope) {
        $scope.message = "lichun";
        $scope.remaining = function () {
            if ($scope.message) {
                return 100 - $scope.message.length;
            }
            return 100;
        };
        $scope.shouldWarn = function () {
            return $scope.remaining() < 10;
        };
        $scope.hasValidLength = function () {
            return $scope.remaining() >= 0;
        }
    })