angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Data', ['$http','$q', function($http, $q) {

  var graphs = ["Emissions Per Gdp","Gdp","Gdp growth","Unemployment households","Consumer Price Index","Profit Rate"];

  return {
    get: function (name) {

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
    allNames: function(){
      return graphs;
    }
  }
}])



;
