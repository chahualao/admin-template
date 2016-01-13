/* 
* @Author: Administrator
* @Date:   2016-01-13 10:57:14
* @Last Modified by:   Administrator
* @Last Modified time: 2016-01-13 10:59:33
*/

'use strict';
(function ($) {
    $.fn.Tree = function (options) {
        var defaults = {
            tip:'展开或收起'
        };
        //合并配置
        options = $.extend(defaults, options);
        this.each(function () {
            var Tree = $(this);
            //给所有父类标签添加title
            $(Tree).find('li:has(ul)').addClass('li-parent').find(' > span').attr('title', options.tip);
            // 收起或者展开
            $(Tree).delegate('li.li-parent > span', 'click', function (e) {
                var children = $(this).parent('li.li-parent').find(' > ul > li');
                if (children.is(':visible')) {
                    children.hide('fast');  
                } else {
                    children.show('fast'); 
                }
                //添加或删除类li-selected
                var patent = $(this).parent('li.li-parent');
                if (patent.hasClass('li-selected')) {
                    patent.removeClass('li-selected');
                }
                else {
                    //$(Tree).find('li.li-selected').removeClass('li-selected');
                    patent.addClass('li-selected');
                }
                e.stopPropagation();
            });
        });
    };
})(jQuery);