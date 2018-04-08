		// document.write('현재 사용자의 화녁ㅇ은 오프라인 환경이다.', window.navigator.onLine); //true
		document.write('현재 사용자의 환경은 온라인입니까?', window.navigator.onLine ? '네 온라인입니다.' : '오프라인입니다'); //네 온라인입니다.
		// {console} window.navigator.onLine --> true

		// document.write('<h1>This is Javascript</h1>');
		setTimeout(function(){
			document.write('<h1>This is Javascript</h1>');
		}, 2000);