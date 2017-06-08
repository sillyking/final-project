$(function(){
		$('#ty_full_page').fullpage({
		sectionsColor: ['#1bbc9b', '#fff', '#7BAABE', '#f90'],
		'navigation': true,
		});
	});
 	$(document).ready(function ($) {
 		var boxHeight=$("body").height();
        $(".ty-login-explore-content").slimScroll({
            height:boxHeight,//网页可见区域高度
            alwaysVisible: true,
            railDraggable: true
        });
    });
    $(function(){
    var timeline = new VMM.Timeline();
    timeline.init("/timeline.json");
    });
