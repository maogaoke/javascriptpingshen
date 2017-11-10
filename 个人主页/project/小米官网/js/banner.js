 $(function(){
	var parent = $(".xm-slider-box ul").eq(0);//图片盒子里的第一张图片
	var ctrBtn = $(".xm-slider-box ul").eq(1);//轮播点盒子第一个
	var cur = 0;
     ctrBtn.click(function(e){
		e = e || window.event;
		autoplay(e);
	});
	 var timer = setInterval(autoplay,3000);
     parent.hover(function(){
		clearInterval(timer);
	 },function(){
		timer = setInterval(autoplay,3000);
	 });
     ctrBtn.hover(function(){
         clearInterval(timer);
     },function(){
         timer = setInterval(autoplay,3000);
     });
	 //自动轮播
	 function autoplay(e){
	     /*注意设置checked、selected属性时只能用prop方法，不能使用attr()方法*/
		 e?(cur = $(e.target.parentNode).index()):(cur<4?cur++:cur = 0);
         parent.children().eq(cur).addClass("active").siblings().removeClass("active");
         ctrBtn.children().find("input:checked").prop("checked",false);
         ctrBtn.children().eq(cur).find("input").prop("checked",true);
	 }
 });
