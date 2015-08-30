angular.module('viaplay.controllers', [])

        .controller('VideoDetailCtrl', function ($scope, ContentApi) {
            $scope.content = [];
            $scope.links = [];
            $scope.movieTitle = "SSSS";
            var movieName = 'ghostbusters-1984';
            var imdbId = '';
            ContentApi.movieDetail(movieName).success(function (data) {
                
                $scope.content = data._embedded["viaplay:blocks"][0]._embedded["viaplay:product"].content;
                $scope.links = data._embedded["viaplay:blocks"][0]._embedded["viaplay:product"]._links;
                imdbId = $scope.content.imdb.id;                
                console.log(data._embedded);                
                console.log(imdbId);
            }).error(function (data) {
                
            }).finally(function (data) {
                
            });
        });