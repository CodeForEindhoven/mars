myApp.controller('UserAdminController', ["$scope", "$state", "$http", "statics", "user",

  function($scope, $state, $http, statics, user) {


    $scope.changepasswordbuttonhandler = function() {

      parms = {
        task : 'changepassword',
        userid : user.getid(),
        oldpassword : sha256($scope.oldpassword),
        newpassword : sha256($scope.newpassword)
      }

      $http.get(statics.apiUrl, {params : parms})
        .then(
          function(response) {
            if (response.data.error) {
              alert('Change password failed : ' + response.data.text);
            }
            else {
              if (response.data.error == false) {
                alert('Change password succeeded, login again');
                $state.go('login');
              } else {
                alert('Error : ' + response.data.text);
              }
            }
          },
          function(response) {
            alert('Network error : ' + JSON.stringify(response, null, 4));
          }
        );
    }

    var getemail = function() {

      parms = {
        task : 'getemail',
        userid : user.getid()
      }

      $http.get(statics.apiUrl, {params : parms})
        .then(
          function(response) {
            if (response.data.error) {
              alert('Email checkin failure : ' + response.data.text);
            }
            else {
              if (response.data.error == false) {
                $scope.email = response.data.data;
                $scope.showit= true;
              } else {
                alert('Error : ' + response.data.text);
              }
            }
          },
          function(response) {
            alert('Network error : ' + JSON.stringify(response, null, 4));
          }
        );
    }

    $scope.changeemail = function() {

      parms = {
        task : 'changeemail',
        userid : user.getid(),
        email : $scope.email
      }

      $http.get(statics.apiUrl, {params : parms})
        .then(
          function(response) {
            if (response.data.error) {
              alert('Email checkout failure : ' + response.data.text);
            }
            else {
              if (response.data.error == false) {
                alert('Email changed successfully.');
                $state.go('home');
              } else {
                alert('Error : ' + response.data.text);
              }
            }
          },
          function(response) {
            alert('Network error : ' + JSON.stringify(response, null, 4));
          }
        );
    }




    console.log('useradmin');
    $scope.statics = statics;
    $scope.showit = false;

    user.verifyuser();
    console.log('useradmin2');

    window.document.title = "MARS - user admin";

    getemail();
    console.log('useradmin3');

  }
]);
