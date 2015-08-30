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
        })

        .factory('TrailerAddictApi', function ($http) {

            return {
                getTrailerbyImdbId: function (imdb) {
                    return $http({
                        method: 'GET',
                        url: 'traileraddict.php?imdb=' + imdb
                    });

                }
            };
        })

        ;
        
        