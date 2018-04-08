// ex1.
// (function(global, angular, jq) {
// 	'use strict';
// 	angular.module('ngApp').controller('otherCtrl', function() {
// 			// 컨트롤러 참조 변수 
// 			var that = this;
// 			that.init_value = null;
// 			that.trigger = trigger;

// 			function trigger() {
// 				// console.log(that);
// 				// that에 참조된 컨트롤러 객체를 사용하기 때문에
// 				// 함수를 누가 호출하든 this가 가지 ㄴ문제점을 해결할 수 있다.
// 				if ( jq.type(that.init_value) === 'null' ) {
// 					that.init_value = 'otherController';
// 				} else {
// 					that.init_value = 'not initialization.';
// 				}
// 			}
// 			global.setTimeout(trigger, 3000);
// 		});
// })(this, this.angular, this.jQuery);

// ex2.
// (function(global, angular, jq) {
// 	'use strict';

// 	function otherCtrl() {
// 		// 컨트롤러 참조 변수 
// 		var that = this;
// 		that.init_value = null;
// 		that.trigger = trigger;

// 		function trigger() {
// 		// console.log(that);
// 		// that에 참조된 컨트롤러 객체를 사용하기 때문에
// 		// 함수를 누가 호출하든 this가 가지 ㄴ문제점을 해결할 수 있다.
// 			if ( jq.type(that.init_value) === 'null' ) {
// 				that.init_value = 'otherController';
// 				} else {
// 					that.init_value = 'not initialization.';
// 				}
// 			}
// 				// global.setTimeout(trigger, 3000);
// 		}
// 	angular.module('ngApp').controller('otherController', otherCtrl);
// })(this, this.angular, this.jQuery);



/**
 * ------------------------------------------------------
 * 압축 과정에서 $scope 모듈 이름이 변경되는 것을 방지하는 방법 
 * ------------------------------------------------------
 */

//ex3. 방법1
// (function(global, angular, jq) {
// 	'use strict';

// 	function otherCtrl() {
// 		// 컨트롤러 참조 변수 
// 		var that = this;
// 		that.init_value = null;
// 		that.trigger = trigger;

// 		function trigger() {
// 		// console.log(that);
// 		// that에 참조된 컨트롤러 객체를 사용하기 때문에
// 		// 함수를 누가 호출하든 this가 가지 ㄴ문제점을 해결할 수 있다.
// 			if ( jq.type(that.init_value) === 'null' ) {
// 				that.init_value = 'otherController';
// 				} else {
// 					that.init_value = 'not initialization.';
// 				}
// 			}
// 				// global.setTimeout(trigger, 3000);
// 		}

// 	otherCtrl.$inject = ['$scope'];
// 	angular.module('ngApp').controller('otherController', otherCtrl);
// })(this, this.angular, this.jQuery);

//ex4. 방법2
(function(global, angular, jq) {
	'use strict';

	function otherCtrl() {
		// 컨트롤러 참조 변수 
		var that = this;
		that.init_value = null;
		that.trigger = trigger;

		function trigger() {
		// console.log(that);
		// that에 참조된 컨트롤러 객체를 사용하기 때문에
		// 함수를 누가 호출하든 this가 가지 ㄴ문제점을 해결할 수 있다.
			if ( jq.type(that.init_value) === 'null' ) {
				that.init_value = 'otherController';
				} else {
					that.init_value = 'not initialization.';
				}
			}
				// global.setTimeout(trigger, 3000);
		}
	angular.module('ngApp').controller('otherController', ['$scope', otherCtrl]);
})(this, this.angular, this.jQuery);