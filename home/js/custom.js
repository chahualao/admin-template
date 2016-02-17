/* 
* @Author: Administrator
* @Date:   2016-01-28 15:15:09
* @Last Modified by:   Administrator
* @Last Modified time: 2016-02-15 17:55:12
*/

'use strict';
/**comments**/
$(function(){
	$("#posted-comments-list .post-reply").each(function() {
		$(this).bind('click',function() {
			var formStr =$(this).parent().next().show();
			//$(formStr).show();
			console.log(formStr);
			//$(this).parent().after(formStr);
			//str.remove();
			//$(this).next().show();
		});
	});
})
