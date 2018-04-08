// ex1.
// (function(global, angular, jq) {
// 	'use strict';

// 	angular.module('ngApp').controller('ngController', function($scope){
// 		// 지역 변수 설정
// 		var content_text = 'AngularJS Application is Awesome!!';

// 		// $scope 객체의 속성/메소드 정의
// 		$scope.content = '';
// 		$scope.setContent = function() {
// 			this.content = content_text;
// 		}

// 		// jQuery
// 		// var ngTHeadline = angular.element('.ng-template-headline'); // - error
// 		var ngTHeadline = jq('.ng-template-headline'); // jqeury

// 		// JS
// 		content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('!!', '');
// 		ngTHeadline.text( content_text ); // button 클릭시 -> awesome
// 	});
// })(this, this.angular, this.jQuery);

// ex2.
// (function(global, angular, jq) {
// 	'use strict';

// 	function ngCtrl($scope){
// 			// 지역 변수 설정
// 			var content_text = 'AngularJS Application is Awesome!!';

// 			// $scope 객체의 속성/메소드 정의
// 			$scope.content = '';
// 			$scope.setContent = function() {
// 				this.content = content_text;
// 			}

// 			// jQuery
// 			// var ngTHeadline = angular.element('.ng-template-headline'); // - error
// 			var ngTHeadline = jq('.ng-template-headline'); // jqeury

// 			// JS
// 			content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('!!', '');
// 			ngTHeadline.text( content_text ); // button 클릭시 -> awesome
// 		}

// 	angular.module('ngApp').controller('ngController', ngCtrl);
// })(this, this.angular, this.jQuery);


/**
 * ------------------------------------------------------
 * 압축 과정에서 $scope 모듈 이름이 변경되는 것을 방지하는 방법
 * ------------------------------------------------------
 */

// ex3. 방법1
// (function(global, angular, jq) {
// 	'use strict';

// 	function ngCtrl($scope){
// 			// 지역 변수 설정
// 			var content_text = 'AngularJS Application is Awesome!!';

// 			// $scope 객체의 속성/메소드 정의
// 			$scope.content = '';
// 			$scope.setContent = function() {
// 				this.content = content_text;
// 			}

// 			// jQuery
// 			// var ngTHeadline = angular.element('.ng-template-headline'); // - error
// 			var ngTHeadline = jq('.ng-template-headline'); // jqeury

// 			// JS
// 			content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('!!', '');
// 			ngTHeadline.text( content_text ); // button 클릭시 -> awesome
// 		}

// 	ngCtrl.$inject = ['$scope'];

// 	angular.module('ngApp').controller('ngController', ngCtrl);
// })(this, this.angular, this.jQuery);

//ex4. 방법2
(function(global, angular, jq) {
	'use strict';

	function ngCtrl($scope){
			// 지역 변수 설정
			var content_text = 'AngularJS Application is Awesome!!';

			// $scope 객체의 속성/메소드 정의
			$scope.content = '';
			$scope.setContent = function() {
				this.content = content_text;
			}

			// jQuery
			// var ngTHeadline = angular.element('.ng-template-headline'); // - error
			var ngTHeadline = jq('.ng-template-headline'); // jqeury

			// JS
			content_text = content_text.split(' ').slice(-1).toString().toLowerCase().replace('!!', '');
			ngTHeadline.text( content_text ); // button 클릭시 -> awesome
		}

	angular.module('ngApp').controller('ngController', ['$scope', ngCtrl]);
})(this, this.angular, this.jQuery);
