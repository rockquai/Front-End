// ex1. 랜덤으로 인텍스 값 가져오기 - 다시 수정하기
// (function(global, angular, jq) {
// 	'use strict';
// 	var app = angular.module('ngApp');
// 	// console.log(app); // object

// 	// 비공개 함수 
// 	// els = $tabmenu_btns
// 	function getRandomCount(els) {
// 		if ( !els.length || els.length === 0 ) { return 0; } 
// 		return Math.floor( Math.random() * els.length );
// 	}

// 	app.controller('tabController', ['$scope', function($scope) {
// 			var $tabmenu = $('.tab_manu');
// 			var $tabmenu_btns = $tabmenu.find('button');

// 			// 초기 활성화된 탭
// 			$scope.selected_tab = getRandomCount($tabmenu_btns);
// 			$scope.setRandom = function() {
// 				this.selected_tab = getRandomCount($tabmenu_btns);
// 			};
// 	}]);
// })(this, this.angular, this.jQuery);

// ex2. 탭메뉴
(function(global, angular, jq) {
	'use strict';
	var app = angular.module('ngApp');

	// 비공개 함수 
	// els = $tabmenu_btns
	function getRandomCount(els) {
		if ( !els.length || els.length === 0 ) { return 0; } 
		return Math.floor( Math.random() * els.length );
	}

	app.controller('tabController', ['$scope', function($scope) {
		// 초기 활성화된 탭 인덱스 속성 
		$scope.selected_tab_idx = 0;

		// 선택된 탭이 맞는가를 검증하는 메소드
		$scope.isSelectedTab = function(tab_idx) {
			return this.selected_tab_idx === tab_idx;
		};

		// 탭을 사용자가 클릭할 경우, 탭의 인덱스를 사용자가 선택한 탭의 인덱스로 변경
		$scope.selectTab = function(idx) {
			this.selected_tab_idx = idx;
		};
	}]);
})(this, this.angular, this.jQuery);