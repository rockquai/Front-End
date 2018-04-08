// ex1
// (function(global, angular) {
// 	'use strict';

// 	angular.module('fdsApp', []);
// 	app.controller('fdsMemberListController', ['$scope', '$http', function($scope, $http){
// 	}]);

// 	function fdsMemberListController($scope, $http) {
// 	}

// 	fdsMemberListController.$inject = ['$scope', '$http'];

// 	app.controller('fdsMemberListController2', fdsMemberListController);

// })(this, this.angular);


//ex2. 
(function(global, angular) {
	'use strict';

	// angular 모듈 정의 
	var app = angular.module('fdsApp', []);

	app.controller('fdsMemberListController', ['$http', function($http){
		// 비동기 통신 수행
		// console.log('$http:', $http);

		//컨트롤 객체 참조 변수 설정 
		var ctrl = this;

		// 참조된 컨트롤 객체의 속성 members 설정(초기 값)
		ctrl.members = [];

		// 비동기 통신 수행
		$http({
			'method': 'GET',
			'url': '/db/one-piece.json'
		}).then(successAjaxCall, errorAjaxCall);

		function successAjaxCall(response) {
			// console.log('비동기 통신 성공');
			ctrl.members = response.data;
		}

		function errorAjaxCall(response) {
			// console.log('비동기 통신에 실패');
		}
	}]);
})(this, this.angular);