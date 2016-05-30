angular.module('starter.controllers',[])

.controller('HelpCtrl', function($scope) {})

.controller('DashCtrl', function($scope){
$scope.groups = [{
  title: "Carbon Emission Tax",
  description: "A first policy scenario is aimed to test a carbon tax, i.e. a tax on CO 2 emissions without employing any additional climate policies. As the government has no means to reduce or increase its general spending (unemployment subsidies and pensions) willingly, these additional tax revenues have no effect on its behavior.",
  contents: [{
    line: "WHY?"
  }]
}, {
  title: "Research&Development",
  description: "If a firm follows a green innovation trajectory, its R&D costs are subsidized. This can take the form of subsidies for the installation of green filters, for example. The total amount of R&D subsidies provided by the government will be approximately equal to the revenue of the carbon tax. Individual firms receive subsidies in relation to their R&D costs, weighted by the marginal effectivity of the improvement. Thus, if two firms have equal R&D costs (i.e. who have the same production capital), the firm that will achieve a higher emission reduction by R&D will get a higher subsidy.",
  contents: [{
    line: "WHY?"
  }]
}, {
  title: "Production Coefficient",
  description: "It shows the changes in the two technology branches (emission reduction vs. total factor productivity) and visualizes the innovation in total factor productivity relative to the business as usual case.",
  contents: [{
    line: "WHY?"
  }]
}, {
  title: "Emission Coefficient",
  description: "It shows the development of emission reduction, its diffusion over time.",
  contents: [{
    line: "WHY?"
  }]
}, {
  title: "Emissions per (nom.) GDP",
  description: "It shows the annual development of real GDP. Real GDP is measured as the aggregated final demand by households and the government, adjusted by the weighted mean price for every year.",
  contents: [{
    line: "WHY?"
  }]
}, {
  title: "Unemployment Rate",
  description: "The unemployment rate is a measure of the number of people who are both jobless and looking for a job. This measurement is considered a lagging indicator, confirming but not foreshadowing long-term market trends.",
  contents: [{
    line: "WHY?"
  }]
}, {
  title: "Wealth Capitalists vs. Rest",
  description: "It shows the direct impact of losses in firm profit for the capitalist class thereafter. Since firm owners are not able to transfer bigger shares as dividends, the development of their wealth decreases significantly in comparison.",
  contents: [{
    line: "WHY?"
  }]
}, {
  title: "CPI",
  description: "A consumer price index (CPI) measures changes in the price level of a market basket of consumer goods and services purchased by households.",
  contents: [{
    line: "WHY?"
  }]
}, {
  title: "Want-Need-Ratio",
  description: "It shows the development of the annual shares between need and want sales. Basically in our model this measure serves as an indicator for purchasing power, the higher the relative income/wealth the higher the want sales that are boosting the economy.",
  contents: [{
    line: "WHY?"
  }]
}, {
  title: "Profit-Rate",
  description: "It shows the development of firm profit rates in comparison to business as usual. Obviously all scenarios(exept BAU) translate into lower firm profit due to the introduction of the carbon tax.",
  contents: [{
    line: "WHY?"
  }]
}];

/* if given group is the selected group, deselect it else, select the given group */
$scope.toggleGroup = function(group) {
  if ($scope.isGroupShown(group)) {
    $scope.shownGroup = null;
  } else {
    $scope.shownGroup = group;
  }
};

$scope.isGroupShown = function(group) {
  return $scope.shownGroup === group;
};
})

// .controller('FactCtrl', ['Papa', function($scope, Papa) {
//
//   var fileloc = "data/EmissionPerGdp.csv";
//
//       var data = Papa.parse(fileloc, {
//         delimiter: ",",	// auto-detect
//         newline: "\n",	// auto-detect
//         header: true,
//         dynamicTyping: false,
//         preview: 0,
//         encoding: "",
//         worker: false,
//         comments: false,
//         step: undefined,
//         complete: undefined,
//         error: undefined,
//         download: false,
//         skipEmptyLines: false,
//         chunk: undefined,
//         fastMode: undefined,
//         beforeFirstChunk: undefined,
//         withCredentials: undefined
//       }
//         // complete: function(results) {
//         //   console.log("Finished:", results.data);
//         // }
//       );
// }])
//
.controller('FactCtrl', ['Data', function(Data){



  var ctx = document.getElementById("myChart");
  var Items;
  Data.then(function (result) {
    console.log(result.data[0]['BAU']);
    Items = result.data;

    // var myscale = {
    //   display: true,
    //   ticks: {min: 10},
    //   angleLines: {},
    // };
    // var options = {
    //     showLines: false,
    //     type: "linear",
    //     pointLables: {},
    //     scale: myscale,
    // };
    var data = {
      labels: [""],
      datasets: [
        {
          label: "BAU",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          pointStyle: "circle",
          data: new Array(Items.length),
        },
        {
          label: "CT",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [],
        },
        {
          label: "R&D",
          fill:false,
          lineTension: 0.1,
          backgroundColor: "rgba(0,192,192,0.4)",
          borderColor: "rgba(0,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(0,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(0,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [],
        }
      ]
    };
    console.log(Items.length);
    for(var i=0; i < Items.length;i++){
      data.datasets[0].data[i] = Items[i]['BAU'];
      data.datasets[1].data[i] = Items[i]['CT'];
      data.datasets[2].data[i] = Items[i]['R&D'];
    }
    console.log(data.datasets[0]);

    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {}
    });

    // Chart.defaults.global.animationSteps = 50;
    // Chart.defaults.global.tooltipYPadding = 16;
    // Chart.defaults.global.tooltipCornerRadius = 0;
    // Chart.defaults.global.tooltipTitleFontStyle = "normal";
    // Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
    // Chart.defaults.global.animationEasing = "easeOutBounce";


  });

}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $window, $ionicSideMenuDelegate) {
  $scope.settings = {
    enableFriends: true
  }
  $scope.width = function () {
    return $window.innerWidth;
  };

  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleRight(true);
  };

  $scope.isWalletShown = false;
  $scope.toggleWallet = function () {
    $scope.isWalletShown = $scope.isWalletShown === false ? true : false;
    console.log('Toggled');
  }
})

    .directive('fader', function ($timeout, $ionicGesture, $ionicSideMenuDelegate) {
      return {
        restrict: 'E',
        require: '^ionSideMenus',
        scope: true,
        link: function ($scope, $element, $attr, sideMenuCtrl) {
          $ionicGesture.on('tap', function (e) {
            $ionicSideMenuDelegate.toggleRight(true);
          }, $element);
          $ionicGesture.on('dragleft', function (e) {
            sideMenuCtrl._handleDrag(e);
            e.gesture.srcEvent.preventDefault();
          }, $element);
          $ionicGesture.on('dragright', function (e) {
            sideMenuCtrl._handleDrag(e);
            e.gesture.srcEvent.preventDefault();
          }, $element);
          $ionicGesture.on('release', function (e) {
            sideMenuCtrl._endDrag(e);
          }, $element);
          $scope.sideMenuDelegate = $ionicSideMenuDelegate;
          $scope.$watch('sideMenuDelegate.getOpenRatio()', function (ratio) {
            if (Math.abs(ratio) < 1) {
              $element[0].style.zIndex = "1";
              $element[0].style.opacity = 0.7 - Math.abs(ratio);
            } else {
              $element[0].style.zIndex = "-1";
            }
          });
        }
      }
    })

    .directive('canDragMenu', function ($timeout, $ionicGesture, $ionicSideMenuDelegate) {
      return {
        restrict: 'A',
        require: '^ionSideMenus',
        scope: true,
        link: function ($scope, $element, $attr, sideMenuCtrl) {
          $ionicGesture.on('dragleft', function (e) {
            sideMenuCtrl._handleDrag(e);
            e.gesture.srcEvent.preventDefault();
          }, $element);
          $ionicGesture.on('dragright', function (e) {
            sideMenuCtrl._handleDrag(e);
            e.gesture.srcEvent.preventDefault();
          }, $element);
          $ionicGesture.on('release', function (e) {
            sideMenuCtrl._endDrag(e);
          }, $element);
        }
      }
    })
;
