/**
 * 
 * @authors wanghaha (draven0701@foxmail.com)
 * @date    2017-02-27 17:07:52
 * @version $Id$
 */

$(function(){
	$("ul li").each(function(){
		$(this).on("dragover",function(ev){
			ev.preventDefault();

			$(ev.target).css("background","pink");
		});
		$(this).on("dragleave",function(ev){
			ev.preventDefault();

			$(ev.target).css("background","");
		})
		$(this).on("dragend",function(ev){
			// window.location.reload();
			console.log(ev.target);
			$(ev.target).parent("li").css("background","");
		})
		$(this).on("drop",function(ev){

			ev.preventDefault();

			var curr_node = ev.originalEvent.dataTransfer.getData("Text");
			var curr_node_parent = $("#"+curr_node).parent("li");
			// 当前的sortid dataid
			// 目标的sortid dataid

			// 不允许drop进node
			var target_container_class = ev.target.className;
			if(target_container_class == "nodes")
			{
				return false;
			}

			// 目标Node加入来源
			var temp_dom = $(ev.target).children("div");
			curr_node_parent.append(temp_dom);

			// node 加入目标
			$(ev.target).append($("#"+curr_node));
			

			// TODO sort 交换
		});


		var divs = $(this).children("div");
		divs.on("dragstart",function(ev){
			ev.originalEvent.dataTransfer.setData("Text",ev.target.id);
		});
	});
});



