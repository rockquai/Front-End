
(function(global, $){
  'use strict';
    // 유틸리티 메소드 
    // $.ajax
    // $.get()
    // $.post()
    // $.getJSON()
    // $.getScript()

    // $('.deom').on('click', function(){});
    // // Low-Level Interface 방식 
    // $('.deom').click(function(){});
    // $('.deom').mouseenter(function(){});

    /**
     * ----------------------------------------------------
     * 방법1. jQuery AJAX 단축 유틸리티 메소드 
     * ----------------------------------------------------
     */
    
    // var json = $.getJSON('http://api.randomuser.me/?results=20');
    // console.log(json);

    // json.then(function(data, status, XHR) {
    //   console.log(data.results);
    // });

    /**
     * ----------------------------------------------------
     * 방법2. jQuery AJAX Low-Level Interface 메소드 
     * ----------------------------------------------------
     */    
    $.ajax({
        'url': "http://api.randomuser.me/?results=20",
        'dataType': 'json',
        'success' : function(data, status, XHR) {
            console.log(data.results);
        }
    });
})(this, this.jQuery);