app.controller('usersController', ['$scope','$resource', function($scope,$resource){
	var User = $resource('/api/users');

	User.query(function(results){
		$scope.users = results;
	});
	
	$scope.users = [];

}]);