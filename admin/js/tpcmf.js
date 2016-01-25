'use strict';
jQuery(document).ready(function($) {
	//初始化左侧菜单
	$(".nav-list").Tree({
	  menuDown:"glyphicon glyphicon-menu-down menuDown"
	});
	$("#drop-menu").bind("click",function(){
	  $("#nav-list").toggle();
	})
	//tooltip触发
	$("[data-toogle='tooltip']").tooltip();
});


