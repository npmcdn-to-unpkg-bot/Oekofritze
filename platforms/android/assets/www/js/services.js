angular.module('starter.services', [])

    .factory('Data', ['$http', '$q', function ($http, $q) {

        var graphs = ["Emissions Per Gdp", "Gdp", "Gdp Growth", "Unemployment Households", "Cpi", "Profit Rate"];
        var yLabs = ["kg per Gdp","Gdp","%","Unemploymed / Total households","Weighted Price Levels","Profit rates of firms"];

        return {
            getData: function (name) {

                var relPath = "data/" + name + ".csv";
                console.log("hello from data service with " + relPath);
                var p = $http.get(relPath)
                    .then(
                        function (response) {
                            // success callback
                            if (typeof response.data === 'object' || typeof response.data === 'string') {
                                return Papa.parse(response.data, {
                                    delimiter: ",",	// auto-detect
                                    newline: "\n",	// auto-detect
                                    header: true,
                                    dynamicTyping: true,
                                    complete: function (results) {
                                        return results;
                                    }
                                });
                            } else {
                                //invalid response
                                alert("ERROR: response.data not an object or string");
                                return $q.reject(response.data);
                            }
                        },
                        function (response) {
                            // failure call back
                            console.log(response.data);
                            alert("ERROR LOADING DATA form CSV");
                            return $q.reject(response.data);
                        }
                    );
                return p;
            },
            allNames: function () {
                return graphs;
            },
            getYLabel: function(name){
                for (var i=0;i<graphs.length;i++)if(graphs[i] === name) break;
                return yLabs[i];
            }
        }
    }])


;
