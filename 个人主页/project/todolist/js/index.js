  var mySwiper = new Swiper ('.swiper-container', {
    //direction: 'vertical',
      loop: true,
    autoplay:3000,
    // 如果需要分页器
      pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
//  nextButton: '.swiper-button-next',
//  prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
   // scrollbar: '.swiper-scrollbar',
  })         
  
/*var mySwiper = new Swiper('.swiper-container',{
effect : 'fade',
})*/
/*var mySwiper2 = new Swiper('.swiper-container',{
effect : 'cube',
})*/
/*var mySwiper3 = new Swiper('#swiper-container3',{
effect : 'coverflow',
slidesPerView: 3,
centeredSlides: true,
})
var mySwiper4 = new Swiper('#swiper-container4',{
effect : 'flip',
})*/

var myIScroll = new IScroll(".content",{
	 mouseWheel: true,
    scrollbars: true,
    click:true,
    fadeScrollbars:true,
});


var status="wait";
$(".bthbox div").click(function () {
    $(".bthbox div").removeClass("active").filter(this).addClass("active")
    if($(".wait").hasClass("active")){
    	status="wait";
    }else{
    	status="done";
    }
    reWrite();
    myIScroll.scrollTo(0, 0, 0);
})
$(".add").click(function () {
    $("#main")
        .css("filter","blur(2px)")
        .next()
        .show()
        .find(".textarea")
        .delay(500)
        .queue(function () {
            $(this).addClass("show").dequeue()
            $("#text")[0].focus();
        });
})
$("#submit").click(function () {
    var text=$("#text").val();
    if(text===""){
        return;
    }
    $("#text").val("")
    var time=new Date().getTime();
    var data=getData()
    if(status==="wait"){
    	 data.push({con:text,time,isStar:0,isDone:0,color:getColor()})
    }
    if(status==="done"){
    	data.push({con:text,time,isStar:0,isDone:1,color:getColor()})
    }
   
    reWrite()
    saveData(data)
    $(".textarea")
        .hide()
        .parent()
        .hide()
        .prev()
        .css("filter","")
})

/*$(".content").on("click","#right",function(){
	var data=getData();
	var index=$(this).parent().attr("id");
	date.reverse();
	data[index].isDone=1;
	date.reverse();
	saveData(data);
	reWrite();
})

$(".content").on("click","i",function(){
	var data=getData();
	var index=$(this).parent().attr("id");
	data.reverse();
	
})*/
//localStorage
function getData() {
    return localStorage.todo?JSON.parse(localStorage.todo):[];
}
function saveData(data) {
    localStorage.todo=JSON.stringify(data)
}


$('.close').click(function () {
    $('.textarea').removeClass('show').parent()
        .hide()
        .prev()//找前面的
        .css('filter', '')
})
$('.showclose').click(function () {
    $('.showarea').removeClass('show').parent()
        .hide()
        .prev()//找前面的
        .css('filter', '')
})

//生成数据
function reWrite() {
    var data=getData();
    data.reverse();
    var str="";
    if(status==="wait"){
    	 $.each(data,function (index,val) {
    	 	if(val.isDone==0){
    	 		var className = val.isStart? 'active' : '';
    	 		 str+="<li style='background:"+val.color+"'><time>"+getdate(val.time)+"</time><span>"+getTime(val.time)+"</span> <p>"+val.con+"</p> <i>♡</i><div class='right'>完成</div> </li>"
    	 	}
       
    })
    }
     if(status==="done"){
    	 $.each(data,function (index,val) {
    	 	if(val.isDone==1){
    	 		 str+="<li><time>"+getdate(val.time)+"</time><span>"+getTime(val.time)+"</span> <p>"+val.con+"</p> <i>♡</i><div class='delete'>删除</div> </li>"
    	 	}
       
    })
    }
   
    $(".content").html(str)
 addEvent();
}
reWrite();


var colorArr=[3,6,9,"c","f"];
function getColor(){
	var str="#";
	
	for(var i=0;i<3;i++){
		var pos=Math.floor(Math.random()*colorArr.length);
	 str+=colorArr[pos];
	}
	return str;
}
function getdate(ele){
		var date=new Date();
		date.setTime(ele);
		var year=date.getFullYear();
		var month=addZero(date.getMonth()+1);
		var day=addZero(date.getDay());
		return year+"-"+month+"-"+day;
}
function getTime(ele){
	var date=new Date();
	date.setTime(ele);
	var hour=addZero(date.getHours());
	var minute=addZero(date.getMinutes());
	var second=addZero(date.getSeconds());
	return hour+":"+minute+":"+second;
}
function addZero(num){
	return num<10? '0'+num:num;
}


var max = $(window).width() / 3;
function addEvent() {
    $('.content li').each(function (index, ele) {
        var hammer = new Hammer(ele);//!!!!!!!!!注意引用js文件
        var mx;
        var state = 'start';
        hammer.on('panstart', function () { //------触屏开始
            $(ele).css('transition', 'none');
        })
        hammer.on('pan', function (e) { //-------触屏移动
            mx = e.deltaX; //拖动距离
            if (state == 'start') {
                if (mx > 0) {//刚开始拖
                    return;
                }
            }
            if (state == 'end') {
                if (mx < 0) {
                    return;
                }
                mx = -max+mx;
            }
            if (Math.abs(mx) > max) {
                return;
            }
            $(ele).css('transform', "translate3d(" + mx + "px,0,0)")
        })
        hammer.on('panend', function () { //------拖动结束
            $(ele).css('transition', 'all 1s');
            if (Math.abs(mx) > max / 2) {//无论左右拖动
                $(ele).css('transform', 'translate3d(-'+max+'px,0,0)');
                state = 'end';
            }
            else {
                $(ele).css('transform', 'translate3d(0,0,0)');
                state = 'start';
            }
        })
    })
}
// 点击完成--移动到已完成中----------------
$('.content').on('click', '.right', function () {
    var data = getData();
    var index = $(this).parent().attr('id');//获取到li中的id
    data.reverse();//顺序颠倒
    data[index].isDone = 1;
    data.reverse();//顺序再返回去
    saveData(data);
    reWrite();
})
//点击五角星--颜色改变--------------------
$('.content').on('click', 'i', function () {
    var data = getData();
    var index = $(this).parent().attr('id');
    data.reverse();
    data[index].isStart = data[index].isStart===1 ? 0 : 1;
    //先判断当前是真假 真的是1
    data.reverse();
    saveData(data);
    reWrite();
})
//已完成中的----删除----------------
$('.content').on('click','.delete', function (){
    var data = getData();
    var index = $(this).parent().attr('id');
    data.reverse();
    data.splice(index, 1)//删除某一个
    // data.reverse();
    saveData(data);
    reWrite();
})
//--------清空---------------------
function clear() {
    var data =getData();
    // data = $.grep(data, function (ele, index) {
    //     return ele.isDone == 0;
    // })//过滤 $.grep 数组
    saveData(data);
    reWrite()
}
$('#dell').click(function(){
   $('.content ul li').each(function(index,ele){
       console.log($(ele).find('input').attr('checked'))
        // if($(ele).attr('checked')==true){
        //     clear();
        // }
   })
})

$('.content').on('click', 'p', function () {
    var text = $(this).html();
    $('#main').css('filter', 'blur(2px)');
    $('.mask')
        .show()
        .find('.showarea')
        .delay(500)
        .queue(function () {
            $(this)
                .addClass('show')
                .dequeue();
            $('.show-inner').html(text);
            $('.showclose').html('X');
        })
})

