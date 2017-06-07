    $(function(){ 
		$('#ty_full_page').fullpage({
		sectionsColor: ['#1bbc9b', '#fff', '#7BAABE', '#f90'],
		'navigation': true,
		});
	});

 	$(document).ready(function ($) { //滚动条
 		var boxHeight=$("body").height();
        $(".ty-login-explore-content").slimScroll({
            height:boxHeight,//网页可见区域高度
            alwaysVisible: true,
            railDraggable: true
        });
    });

    $(function(){  //时间轴
    var timeline = new VMM.Timeline();
    timeline.init("timeline.json");
    });
