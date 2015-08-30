angular.module('viaplay.filters', [])

        //Filter for Date to ISO
        .filter('dateToISO', function () {
            return function (input) {
                var d = new Date();
                return d.toISOString();
            };
        })

        // Capitalize the Text
        .filter('capitalize', function () {
            return function (input, all) {
                return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }) : '';
            };
        });
