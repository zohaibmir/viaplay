angular.module('viaplay.controllers', [])

        .controller('VideoDetailCtrl', function ($scope,$sce, ContentApi, TrailerAddictApi) {
            $scope.content = [];
            $scope.links = [];
            $scope.iframe = '';
            $scope.showiframe = false;
            
            var movieName = 'playing-it-cool-2014';
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
            
            
            $scope.playButton = function () {                
                TrailerAddictApi.getTrailerbyImdbId(imdbId).success(function (data) {
                    $scope.showiframe = true;
                    $scope.iframe = $sce.trustAsHtml('<iframe width="602" height="338" src="//v.traileraddict.com/'+data.trailer_id[0]+'" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no" frameborder="0"></iframe>');                    
                });
            }


        });