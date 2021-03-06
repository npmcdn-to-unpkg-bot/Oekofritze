angular.module('starter.controllers', [])

    .controller('HelpCtrl', function ($scope) {
    })

    .controller('DashCtrl', function ($scope) {
    })

    .controller('FactCtrl', function ($scope) {

        $scope.toggleGroup = function (group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };

        $scope.isGroupShown = function (group) {
            return $scope.shownGroup === group;
        };

        $scope.facts = [{
            titel: "BAU",
            beschreibung: "Business as usual (BAU) is the normal execution of standard functional operations within an organization. It forms a possible contrast to projects or programmes which might introduce change.",
            inhalt: [{
                line: "x"
            }]
        },{
            titel: "Carbon Emission Tax",
            beschreibung: "A first policy scenario is aimed to test a carbon tax, i.e. a tax on CO 2 emissions without employing any additional climate policies. As the government has no means to reduce or increase its general spending (unemployment subsidies and pensions) willingly, these additional tax revenues have no effect on its behavior.",
            inhalt: [{
                line: "x"
            }]
        }, {
            titel: "Research&Development",
            beschreibung: "If a firm follows a green innovation trajectory, its R&D costs are subsidized. This can take the form of subsidies for the installation of green filters, for example. The total amount of R&D subsidies provided by the government will be approximately equal to the revenue of the carbon tax. Individual firms receive subsidies in relation to their R&D costs, weighted by the marginal effectivity of the improvement. Thus, if two firms have equal R&D costs (i.e. who have the same production capital), the firm that will achieve a higher emission reduction by R&D will get a higher subsidy.",
            inhalt: [{
                line: "x"
            }]
        }, {
            titel: "Production Coefficient",
            beschreibung: "It shows the changes in the two technology branches (emission reduction vs. total factor productivity) and visualizes the innovation in total factor productivity relative to the business as usual case.",
            inhalt: [{
                line: "x"
            }]
        }, {
            titel: "Emission Coefficient",
            beschreibung: "It shows the development of emission reduction, its diffusion over time.",
            inhalt: [{
                line: "x"
            }]
        }, {
            titel: "Emissions per (nom.) GDP",
            beschreibung: "It shows the annual development of real GDP. Real GDP is measured as the aggregated final demand by households and the government, adjusted by the weighted mean price for every year.",
            inhalt: [{
                line: "x"
            }]
        }, {
            titel: "Unemployment Rate",
            beschreibung: "The unemployment rate is a measure of the number of people who are both jobless and looking for a job. This measurement is considered a lagging indicator, confirming but not foreshadowing long-term market trends.",
            inhalt: [{
                line: "x"
            }]
        }, {
            titel: "Wealth Capitalists vs. Rest",
            beschreibung: "It shows the direct impact of losses in firm profit for the capitalist class thereafter. Since firm owners are not able to transfer bigger shares as dividends, the development of their wealth decreases significantly in comparison.",
            inhalt: [{
                line: "x"
            }]
        }, {
            titel: "CPI",
            beschreibung: "A consumer price index (CPI) measures changes in the price level of a market basket of consumer goods and services purchased by households.",
            inhalt: [{
                line: "x"
            }]
        }, {
            titel: "Want-Need-Ratio",
            beschreibung: "It shows the development of the annual shares between need and want sales. Basically in our model this measure serves as an indicator for purchasing power, the higher the relative income/wealth the higher the want sales that are boosting the economy.",
            inhalt: [{
                line: "x"
            }]
        }, {
            titel: "Profit-Rate",
            beschreibung: "It shows the development of firm profit rates in comparison to business as usual. Obviously all scenarios(exept BAU) translate into lower firm profit due to the introduction of the carbon tax.",
            inhalt: [{
                line: "x"
            }]
        }]
    })


    .controller('ModelCtrl', function ($scope, $window, $ionicSideMenuDelegate, $ionicPopup, Data) {
        $scope.settings = {
            enableFriends: true
        }
        $scope.width = function () {
            return $window.innerWidth;
        };

        $scope.height = function () {
            return $window.innerHeight;
        };

        var graphName = "Slide left to choose a Graph";
        $scope.getGraphName = function () {
            return graphName;
        }

        var myLineChart;

        // $scope.openMenu = function() {
        //   $ionicSideMenuDelegate.toggleRight(true);
        // };
        //
        // $scope.isWalletShown = false;
        // $scope.toggleWallet = function () {
        //   $scope.isWalletShown = $scope.isWalletShown === false ? true : false;
        //   console.log('Toggled');
        // }s


        console.log("Model Ctrl ");
        $scope.getChart = function (name) {

            //hide sidemenu
            if($ionicSideMenuDelegate.isOpenLeft()) $ionicSideMenuDelegate.toggleLeft();

            //erase old chart
            if (myLineChart) myLineChart.destroy();

            console.log("hello from ModelCtrl with " + name);

            //get element
            var ctx = document.getElementById("myChart").getContext("2d");

            var Items;


            graphName = name;

            Data.getData(name).then(function (result) {
                console.log(result.data[0]['BAU']);
                Items = result.data;

                var lab = [];
                for (var i = 0; i < Items.length; i++) {
                    if (!(i % 10))
                        lab[i] = i.toString();
                    else
                        lab[i] = "";
                }

                var xlab = "Months";
                var ylab = Data.getYLabel(name);

                var options = {
                    bezierCurve: false,
                    type: "linear",
                    pointDot: true,
                    pointDotRadius: 5,
                    pointHitDetectionRadius: 20,
                    datasetFill: false,
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: ylab
                            }
                        }],   xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: xlab
                            }
                        }]
                    },
                };

                var data = {
                    labels: lab,
                    datasets: [
                        {
                            label: "BAU",
                            fill: false,
                            // fillColor: "rgba(151,187,205,0.2)",
                            // strokeColor: "rgba(151,187,205,1)",
                            // pointColor: "rgba(151,187,205,1)",
                            pointStrokeColor: "#b42573",
                            pointHighlightFill: "#b42573",
                            // pointHighlightStroke: "rgba(151,187,205,0.2)",
                            // backgroundColor: "rgba(151,187,205,0.2)",
                            borderColor: "rgba( 	180,	37,	115, 0.5)",
                            // borderCapStyle: 'butt',
                            // borderDash: [],
                            // borderDashOffset: 0.0,
                            // borderJoinStyle: 'miter',
                            //pointBorderColor: "rgba(151,187,205,0.2)",
                            pointBackgroundColor: "#b42573",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba( 	180	,37,	115, 0.2)",
                            // pointHoverBorderColor: "rgba(151,187,205,0.2)",
                            pointHoverBorderWidth: 2,
                            data: [],
                        },
                        {
                            label: "CT",
                            fill: false,
                            // fillColor: "rgba(151,187,205,0.2)",
                            // strokeColor: "rgba(151,187,205,1)",
                            // pointColor: "rgba(151,187,205,1)",
                            pointStrokeColor: "#3399ff",
                            pointHighlightFill: "#3399ff",
                            // pointHighlightStroke: "rgba(151,187,205,0.2)",
                            // backgroundColor: "rgba(151,187,205,0.2)",
                            borderColor: "rgba(51,153,255, 0.5)",
                            // borderCapStyle: 'butt',
                            // borderDash: [],
                            // borderDashOffset: 0.0,
                            // borderJoinStyle: 'miter',
                            //pointBorderColor: "rgba(151,187,205,0.2)",
                            pointBackgroundColor: "#3399ff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba(51,153,255, 0.2)",
                            // pointHoverBorderColor: "rgba(151,187,205,0.2)",
                            pointHoverBorderWidth: 2,
                            data: [],
                        },
                        {
                            label: "R&D",
                            fill: false,
                            // fillColor: "rgba(151,187,205,0.2)",
                            // strokeColor: "rgba(151,187,205,1)",
                            // pointColor: "rgba(151,187,205,1)",
                            pointStrokeColor: "#ffa500",
                            pointHighlightFill: "#ffa500",
                            // pointHighlightStroke: "rgba(151,187,205,0.2)",
                            // backgroundColor: "rgba(151,187,205,0.2)",
                            borderColor: "rgba( 	255,	165,	0, 0.5)",
                            // borderCapStyle: 'butt',
                            // borderDash: [],
                            // borderDashOffset: 0.0,
                            // borderJoinStyle: 'miter',
                            //pointBorderColor: "rgba(151,187,205,0.2)",
                            pointBackgroundColor: "#ffa500",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "rgba( 	255,	165,	0, 0.2)",
                            // pointHoverBorderColor: "rgba(151,187,205,0.2)",
                            pointHoverBorderWidth: 2,
                            data: [],
                        }
                    ]
                };
                console.log(Items.length);

                var dynAddFromIdx = Items.length;
                for (var i = 0; i < dynAddFromIdx; i++) {
                    data.datasets[0].data[i] = Items[i]['BAU'];
                    data.datasets[1].data[i] = Items[i]['CT'];
                    data.datasets[2].data[i] = Items[i]['R&D'];
                }
                console.log(data.datasets[0]);


                // Chart.defaults.global.animationSteps = 50;
                // Chart.defaults.global.tooltipYPadding = 16;
                // Chart.defaults.global.tooltipCornerRadius = 0;
                // Chart.defaults.global.tooltipTitleFontStyle = "normal";
                // Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
                // Chart.defaults.global.animationEasing = "easeOutBounce";
                // Chart.defaults.global.responsive = true;
                // Chart.defaults.global.scaleLineColor = "black";
                // Chart.defaults.global.scaleFontSize = 16;


                //  draw charts
                myLineChart = new Chart(ctx, {
                    type: 'line',
                    data: data,
                    options: options,
                });




            });


        }


        $scope.showPopup = function () {
            $scope.data = {};

            var text = "Keine Verzweiflung, es geht ganz einfach!\n Swipe einmal nach rechts um die side-bar auszufahren und wähle den gewünschten Parameter aus, den Du betrachten möchtest. Swipe nach links um das Menü wieder zu schließen. Nun sollte Dir die gewünschte Grafik angezeigt werden.\n Nun kannst Du durch klicken auf den Namen eines Szenarios, dieses in der Grafik anzeigen lassen oder ganz einfach ausblenden.\n\n Viel Erfolg!\n\n";


            var alertPopup = $ionicPopup.alert({
                title: 'Help',
                subtitle: 'Models and Graphs',
                template: text
            });
            alertPopup.then(function (res) {
                console.log('help view');
            });
        };


    })
;
