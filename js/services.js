angular.module('viaplay.services', [])
//User Login Service
        .factory('ContentApi', function ($http) {

            return {
                movieDetail: function (movieName) {
                    return $http({
                        method: 'GET',
                        url: 'https://content.viaplay.se/web-se/film/' + movieName
                    });

                }
            };
        });