/* 
* @Author: Administrator
* @Date:   2016-01-13 10:57:14
* @Last Modified by:   Administrator
* @Last Modified time: 2016-01-14 14:36:27
*/

'use strict';
(function ($) {
    $.fn.Tree = function (options) {
        var defaults = {
            tip:'展开或收起',
            menuDown:"glyphicon glyphicon-menu-down"
        };
        //合并配置
        options = $.extend(defaults, options);
        this.each(function () {
            var Tree = $(this);
            var Parents = $(Tree).find('li:has(ul)');
            Parents.each(function(index) {
                //给所有父类标签添加title
                $(this).addClass('li-parent').find(' > span').attr('title', options.tip);
                //添加图标(menuDown)
                var childrenTmp = $(this).find('>ul');
                childrenTmp.remove();
                $(this).append('<i class="'+options.menuDown+'"></i>');
                $(this).append(childrenTmp);
            });
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
            //给图标添加事件
            Parents.each(function() {
                //绑定的事件
                var that = $(this);
                $(this).find(' > i').bind('click', function(event) {
                    that.find('span').trigger('click');
                });
            });
            //给一级菜单添加选择样式
            var root = Tree.find('>ul>li');
            root.each(function() {
                $(this).bind('click',function() {
                    $(this).addClass('li-selected');
                    root.not(this).removeClass('li-selected');
                });
            });
        });
    };
})(jQuery);