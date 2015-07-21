// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ui.calendar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('myController',function($scope){
  $scope.eventSources={
    events:[{
      title: 'Event1',
      start: '2015-07-20'
    },{
      title: 'Event2',
      start: '2015-07-22'
    }],
    color: 'yellow',  
    textColor: 'black'
  }

  $scope.alertEventOnClick=function(date,jsEvent,view){
    console.log('clicked on:'+date.format())
    console.log('coordinates:'+jsEvent.pageX+','+jsEvent.pageY)
    console.log('current views:'+view.name)
  }

  $scope.uiConfig = {
     calendar:{
       height: 450,
       editable: true,
       header:{
         left: 'month basicWeek basicDay agendaWeek agendaDay',
         center: 'title',
         right: 'today prev,next'
       },
       dayClick: $scope.alertEventOnClick,
       eventDrop: $scope.alertOnDrop,
       eventResize: $scope.alertOnResize
     }
   }
})
