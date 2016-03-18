app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: '/partials/missions.html',
		controller: 'missionsCtrl'
	})
	.when('/mission-1.html',{
		templateUrl: '/partials/mission-1.html',
	})
	.when('/mission-2.html',{
		templateUrl: '/partials/mission-2.html',
	})
	.when('/mission-3.html',{
		templateUrl: '/partials/mission-3.html',
	})
	.otherwise({
		template: 'We\'re working on this mission!!'
	});
}]);