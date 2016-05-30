angular.module('starter.controllers',[])

.controller('HelpCtrl', function($scope) {})

.controller('DashCtrl', function($scope) {})

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
