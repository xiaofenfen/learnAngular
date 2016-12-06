var myModule = angular.module("helloAngular",[]);

myModule.controller("helloAngular",['$scope',
	function helloAngular($scope) {
		$scope.greeting = {
			text: 'hello'
		};
	}
]);