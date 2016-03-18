var app = angular.module('myApp', []);

app.controller('missionsCtrl', ['$scope', function($scope){
	$scope.missions = [
		{number: 1, name: 'Verb To Be'},
		{number: 2, name: 'Preferences'},
		{number: 3, name: 'Locations'}
	];
}]);