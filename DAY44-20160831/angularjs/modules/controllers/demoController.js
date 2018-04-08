//ex1. 인라인으로 함수 선언
// (function(global, angular) {
// 	'use strict';
// 	angular.module('ngApp').controller('demoCtrl', function() {
// 		// 비공개 멤버
// 		var headline = 'this App maked Angular';
// 		this.headline = headline;
// 	});
// })(this, this.angular);


//ex2. function 분리. 모듈 패턴(scope)내에서 사용하기
// (function(global, angular) {
// 	'use strict';

// 	// 모듈 패턴내 에서 지역 함수로 선언. 외부접근 불가능.
// 	function demoCtrl() {
// 		// 비공개 멤버
// 		var headline = 'this App maked Angular';
// 		this.headline = headline;
// 	}
// 	angular.module('ngApp').controller('demoController', demoCtrl);
// })(this, this.angular);


/**
 * ------------------------------------------------------
 * 압축 과정에서 $scope 모듈 이름이 변경되는 것을 방지하는 방법 
 * ------------------------------------------------------
 */

//ex3. 방법1. demoCtrl.$inject = ['$scope'];
// (function(global, angular) {
// 	'use strict';

// 	// 모듈 패턴내 에서 지역 함수로 선언. 외부접근 불가능.
// 	function demoCtrl() {
// 		// 비공개 멤버
// 		var headline = 'this App maked Angular';
// 		this.headline = headline;
// 	}

// 	demoCtrl.$inject = ['$scope'];

// 	angular.module('ngApp').controller('demoController', demoCtrl);
// })(this, this.angular);


// ex4. 방법2. ['$scope', demoCtrl]
(function(global, angular) {
	'use strict';

	// 모듈 패턴내 에서 지역 함수로 선언. 외부접근 불가능.
	function demoCtrl() {
		// 비공개 멤버
		var headline = 'this App maked Angular';
		this.headline = headline;
	}

	angular.module('ngApp').controller('demoController', ['$scope', demoCtrl]);
})(this, this.angular);