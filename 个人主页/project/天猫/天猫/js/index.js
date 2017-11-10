/*
* @Author: wz
* @Date:   2017-08-13 10:05:41
* @Last Modified by:   wz
* @Last Modified time: 2017-09-19 00:19:36
*/

// 'use strict';



$(function(){

// 我的淘宝
  let tb=$(".tb-box")
  let taobao=$(".taobao")
  tb.mouseenter(function(){
    taobao.css("display","block")
  })

  tb.mouseleave(function(){
    taobao.css("display","none")
  })


// 收藏夹
  let sc=$(".sc-box")
  let shoucang=$(".shoucang")
  sc.mouseenter(function(){
    shoucang.css("display","block")
  })

  sc.mouseleave(function(){
    shoucang.css("display","none")
  })




// 手机版 
  let sj=$(".sj-box")
  let shouji=(".shouji")
  sj.mouseenter(function(){
    shouji.css("display","block")
  })

  sj.mouseleave(function(){
    shouji.css("display","none")
  })



// 商家支持
  let zc=$(".zc-box")
  let zhichi=$(".zhichi")
  zc.mouseenter(function(){
    zhichi.css("display","block")
  })

  zc.mouseleave(function(){
    zhichi.css("display","none")
  })



// 网站导航
  let wz=$(".wz-box")
  let wangzhan=$(".wangzhan")
  wz.mouseenter(function(){
    wangzhan.css("display","block")
  })

  wz.mouseleave(function(){
     wangzhan.css("display","none")
  })










// 轮播
   let banner=$(".banner-x").eq(0)
    let color=$(".banner-x .color")
    let daohang=$(".daohang").eq(0)
    let bll=$(".bnn").eq(0)
   let bnimg=$(".bnn .bn-img")
    let asdd=$(".as-dd").eq(0)
   let add=$(".as-dd .add")


      for(let i=0;i<bnimg.length;i++) {

        add.eq(i).mouseenter(function(){

          for(let j=0;j<bnimg.length;j++){
          color.eq(j).fadeOut()
          bnimg.eq(j).fadeOut()
          add.eq(j).removeClass('add1')
          }
          color.eq(i).fadeIn()
          bnimg.eq(i).fadeIn()
          add.eq(i).addClass('add1')

    })

   }


    var t=setInterval(fnn,3000)
     
       bll.onmouseenter=function(){
        clearInterval(t)
      }

       bll.onmouseleave=function(){
        t=setInterval(fnn,3000)
      }

      var num=0; 
        function fnn(){
                     
           num++

           if(num==bnimg.length){
            num=0;
           }

          for(let i=0;i<bnimg.length;i++){
            // console.log(i)
         if(i==bnimg.length){
          i=0
         }
             color.eq(i).fadeOut()
             bnimg.eq(i).fadeOut()
             add.eq(i).removeClass('add1')
           }
          color.eq(num).fadeIn()
          bnimg.eq(num).fadeIn()
          add.eq(num).addClass('add1')
 
        }





  // 侧导航

    let aside=$(".aside").eq(0)
    let li1=$(".aside>li")

    li1.mouseenter(function(){
        $(this).find(".youla").css("display","block")
    })

    li1.mouseleave(function(){
         $(this).find(".youla").css("display","none")
    })


// 图片切换
  let tpleft=$(".tp-left")
  let tplt=$(".tpl-top")
  let tplbx=$(".tpl-bottom")
  let tplb=$(".tpl-b")

  // console.log(tplb)
  // 
  let num1=0;
  var tplbimg;
  var tplbimg1;
   for(let i=0;i<tplb.length;i++){
      tplb.eq(i).mouseenter(function(){
        tplt.eq(num1).css("display","none")
        tplt.eq(i).css("display","block")

        // tplbimg=tplb[num1].getElementsByClassName('top-img1')[0]
         tplbimg=tplb.eq(num1).find(".top-img1")
        // tplbimg1=tplb[i].getElementsByClassName('top-img1')[0]
         tplbimg1=$(this).find(".top-img1")

        tplbimg.css("display","none")
        tplbimg1.css("display","block")

        num1=i
        
      })
   }







// 右边固定定位


      let grrx=$(".grr-x")
      let grr=$(".grr")
      let grbox=$(".grbox")
   
        grr.mouseenter(function(){

         $(this).find('.grrb').css("display","block")
          $(this).find('.grrb').animate({left:-95},1)
        })

        grr.mouseleave(function(){

           $(this).find('.grrb').animate({left:-110},1)
          $(this).find('.grrb').css("display","none")
          grbox.css("display","none")
          
        })
/*

        grr.click(function(){

        

         // grbox.style.display='block';
         grbox.css("display","block")
         // grrbjt1.style.display='block';
         $(this).find(".grrbjt1").css("display","none")

        })*/


     


     // let btmx1=document.getElementsByClassName('btmx')[0]
     let btmx1=$(".btmx")
     // let btm1=btmx1.getElementsByClassName('btm') 
     let btm1=$(".btm")

     let now2=0;
     let next2=0;

     setInterval(fn21,2000)

     function fn21(){

      next2++
      if(next2==3){
        next2=0
      }
      
      btm1.eq(now2).css("bottom",0)
      btm1.eq(next2).css("bottom","-50")


       btm1.eq(now2).animate({bottom:50},20)
      btm1.eq(next2).animate({bottom:0})
      now2=next2;
     }




     // 固定定位
// 
   let gddx=$('.gdd-x').eq(0)
   let gdd1=$('.gdd-x>.gdd:nth-child(1)')
   let gdd2=$('.gdd-x>.gdd:nth-child(2)')
   let gdd3=$('.gdd-x>.gdd:nth-child(3)')
   let gdd4=$('.gdd-x>.gdd:nth-child(4)')
   let gdd5=$('.gdd-x>.gdd:nth-child(5)')
   let gdd6=$('.gdd-x>.gdd:nth-child(6)')
   let gdd7=$('.gdd-x>.gdd:nth-child(7)')
   let gdd8=$('.gdd-x>.gdd:nth-child(8)')
   let gdd9=$('.gdd-x>.gdd:nth-child(9)')


   gdd1.hover(function(){
      gdd1.css('background','#FF0036')
      gdd2.css('background','#666666')
      gdd3.css('background','#666666')
      gdd4.css('background','#666666')
      gdd5.css('background','#666666')
      gdd6.css('background','#666666')
      gdd7.css('background','#666666')
      gdd8.css('background','#ACACAC')
      gdd9.css('background','#ACACAC')
   })

   gdd2.hover(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#EA5F8D')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })

   gdd3.hover(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#0AA6E8')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })

   gdd4.hover(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#64C333')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })


   gdd5.hover(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#F15453')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })


   gdd6.hover(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#19C8A9')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })

   gdd7.hover(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#F7A945')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })

   gdd8.hover(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#FF0036')
      gdd9.css('backgroung','#ACACAC')


   
   })






   gdd1.click(function(){
      gdd1.css('background','#FF0036')
      gdd2.css('background','#666666')
      gdd3.css('background','#666666')
      gdd4.css('background','#666666')
      gdd5.css('background','#666666')
      gdd6.css('background','#666666')
      gdd7.css('background','#666666')
      gdd8.css('background','#ACACAC')
      gdd9.css('background','#ACACAC')
   })

   gdd2.click(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#EA5F8D')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })

   gdd3.click(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#0AA6E8')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })

   gdd4.click(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#64C333')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })


   gdd5.click(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#F15453')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })


   gdd6.click(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#19C8A9')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })

   gdd7.click(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#F7A945')
      gdd8.css('backgroung','#ACACAC')
      gdd9.css('backgroung','#ACACAC')
    })

   gdd8.click(function(){
      gdd1.css('backgroung','#FF0036')
      gdd2.css('backgroung','#666666')
      gdd3.css('backgroung','#666666')
      gdd4.css('backgroung','#666666')
      gdd5.css('backgroung','#666666')
      gdd6.css('backgroung','#666666')
      gdd7.css('backgroung','#666666')
      gdd8.css('backgroung','#FF0036')
      gdd9.css('backgroung','#ACACAC')


   
   })





   window.addEventListener('scroll',function(){

    let sh= document.body.scrollTop?document.body:document.documentElement
    let sht=sh.scrollTop;
    // console.log(sht)
    if(sht>=700&&sht<1700){
      gdd1.css('background','#FF0036')
      gdd2.css('background','#666666')
      gdd3.css('background','#666666')
      gdd4.css('background','#666666')
      gdd5.css('background','#666666')
      gdd6.css('background','#666666')
      gdd7.css('background','#666666')
      gdd8.css('background','#ACACAC')
      gdd9.css('background','#ACACAC')
      // gddx.style.display='block'

    }else if(sht>=1700&&sht<2200){
      gdd1.css('background','#FF0036')
      gdd2.css('background','#EA5F8D')
      gdd3.css('background','#666666')
      gdd4.css('background','#666666')
      gdd5.css('background','#666666')
      gdd6.css('background','#666666')
      gdd7.css('background','#666666')
      gdd8.css('background','#ACACAC')
      gdd9.css('background','#ACACAC')
      // gddx.style.display='block'

    }else if(sht>=2200&&sht<2800){
      gdd1.css('background','#FF0036')
      gdd2.css('background','#666666')
      gdd3.css('background','#0AA6E8')
      gdd4.css('background','#666666')
      gdd5.css('background','#666666')
      gdd6.css('background','#666666')
      gdd7.css('background','#666666')
      gdd8.css('background','#ACACAC')
      gdd9.css('background','#ACACAC')
      // gddx.style.display='block'

    }else if(sht>=2800&&sht<3300){
      gdd1.css('background','#FF0036')
      gdd2.css('background','#666666')
      gdd3.css('background','#666666')
      gdd4.css('background','#64C333')
      gdd5.css('background','#666666')
      gdd6.css('background','#666666')
      gdd7.css('background','#666666')
      gdd8.css('background','#ACACAC')
      gdd9.css('background','#ACACAC')
      // gddx.style.display='block'

    }else if(sht>=3300&&sht<3900){
      gdd1.css('background','#FF0036')
      gdd2.css('background','#666666')
      gdd3.css('background','#666666')
      gdd4.css('background','#666666')
      gdd5.css('background','#F15453')
      gdd6.css('background','#666666')
      gdd7.css('background','#666666')
      gdd8.css('background','#ACACAC')
      gdd9.css('background','#ACACAC')
      // gddx.style.display='block'

    }else if(sht>=3900&&sht<4400){
      gdd1.css('background','#FF0036')
      gdd2.css('background','#666666')
      gdd3.css('background','#666666')
      gdd4.css('background','#666666')
      gdd5.css('background','#666666')
      gdd6.css('background','#19C8A9')
      gdd7.css('background','#666666')
      gdd8.css('background','#ACACAC')
      gdd9.css('background','#ACACAC')
      // gddx.style.display='block'

    }else if(sht>=4400&&sht<5000){
      gdd1.css('background','#FF0036')
      gdd2.css('background','#666666')
      gdd3.css('background','#666666')
      gdd4.css('background','#666666')
      gdd5.css('background','#666666')
      gdd6.css('background','#666666')
      gdd7.css('background','#F7A945')
      gdd8.css('background','#ACACAC')
      gdd9.css('background','#ACACAC')
      // gddx.style.display='block'

    }else if(sht>=5000&&sht<5400){
      gdd1.css('background','#FF0036')
      gdd2.css('background','#666666')
      gdd3.css('background','#666666')
      gdd4.css('background','#666666')
      gdd5.css('background','#666666')
      gdd6.css('background','#666666')
      gdd7.css('background','#666666')
      gdd8.css('background','#FF0036')
      gdd9.css('background','#ACACAC')
      // gddx.style.display='block'

    }



        /*gdd1.onclick=function(){
        document.documentElement.scrollTop=700
        }

        gdd2.onclick=function(){
        document.documentElement.scrollTop=1900
        }
*/
   })


  
// 搜索栏
    let flags=true;
    let sousuo=$('.dwbox').eq(0)
    // console.log(sousuo)


      window.addEventListener('scroll',function(){


       let sh1= document.body.scrollTop?document.body:document.documentElement
       let sht1=sh1.scrollTop;
       // console.log(sht1)
      if(sht1>500){
      if(flags){ 

      flags=false;
      sousuo.animate(top,0)
      // console.log(1)
    }
    }else{
      if(!flags){
      flags=true  
      sousuo.animate(top,-50)
      // console.log(2)
      }
    }

   
 
   })


    let flag2=true;
     window.addEventListener('scroll',function(){
        let sh2= document.body.scrollTop?document.body:document.documentElement
       let sht2=sh2.scrollTop;
       if(sht2>500){
        if(flag2){
          flag2=false;
          gddx.animate({width:35,height:332})
         
          console.log(1)
        }
          
       }else{
         if(!flag2){
          flag2=true;
          gddx.animate({width:0,height:0})
          
         }
          
       }

     })

// 楼层跳转  按需加载

/*   let meili=$('.meili')
    let dbx=$('.head-x')
    let arr=[]
    arr.push(dbx.offsetTop)
    let gdd=$('.gdd-x>.gdd')
    // console.log(gdd)
    let ch=window.innerHeight;
    
    let cnx=$('.ccnn-x')
    let headx=$('.head-x')
    let tp=$('.tupian-x')
    let md=$('.module-x')
    let arr1=[];
    arr1.push(tp)
    arr1.push(md)
   
      meili.each(function(index,obj){
       arr1.push(obj)
       // console.log(arr)

    })

  
    arr1.push(cnx)
  // console.log(arr1)
    meili.each(function(index,obj){
       arr.push(obj.offsetTop)
       // console.log(arr)

    })

    arr.push(cnx.offsetTop)

    arr.push(headx.offsetTop)


    
    window.addEventListener('scroll',function(){

       let sh3= document.body.scrollTop?document.body:document.documentElement
       let sht3=sh3.scrollTop;

        for(var i=0;i<arr1.length;i++){


             if(sht3+ch>=arr1[i].offsetTop+200){
             var imgs=arr1[i].querySelectorAll('img')
             // console.log(imgs)
             for(let i=0;i<imgs.length;i++){
              imgs[i].src=imgs[i].getAttribute('imgbox')
             }

             }

         }
  

// 
        for(let i=0;i<gdd.length;i++){

          gdd.eq(i).click(function(){
            // sht3=arr[i]
            sh3.animate({scrollTop:arr[i]-50})
          })
        }
    })


*/

     
   





})












window.onload=function(){

/*
	let tb=document.getElementsByClassName('tb-box')[0]
	let taobao=document.getElementsByClassName('taobao')[0]


	tb.onmouseenter=function(){
		taobao.style.display='block';
	}

	tb.onmouseleave=function(){
		taobao.style.display='none';
	}
*/

/*
	let sc=document.getElementsByClassName('sc-box')[0]
	let shoucang=document.getElementsByClassName('shoucang')[0]
	console.log(shoucang)

	sc.onmouseenter=function(){
		shoucang.style.display='block';
	}

	sc.onmouseleave=function(){
		shoucang.style.display='none';
	}
*/


/*
	let sj=document.getElementsByClassName('sj-box')[0]
	let shouji=document.getElementsByClassName('shouji')[0]


	sj.onmouseenter=function(){
		shouji.style.display='block';
	}

	sj.onmouseleave=function(){
		shouji.style.display='none';
	}




    let zc=document.getElementsByClassName('zc-box')[0]
	let zhichi=document.getElementsByClassName('zhichi')[0]


	zc.onmouseenter=function(){
		zhichi.style.display='block';
	}

	zc.onmouseleave=function(){
		zhichi.style.display='none';
	}


    let wz=document.getElementsByClassName('wz-box')[0]
	let wangzhan=document.getElementsByClassName('wangzhan')[0]
	console.log(wangzhan)

	wz.onmouseenter=function(){
		wangzhan.style.display='block';
	}

	wz.onmouseleave=function(){
		wangzhan.style.display='none';
	}*/

// 轮播
/*
    let banner=document.getElementsByClassName('banner-x')[0]
    let color=banner.getElementsByClassName('color')
	// let daohang=document.getElementsByClassName("daohang")[0]
	let bll=document.getElementsByClassName('bnn')[0]
	let bnimg=bll.getElementsByClassName('bn-img')
	let asdd=document.getElementsByClassName('as-dd')[0];
	let add=asdd.getElementsByClassName('add');



      for(let i=0;i<bnimg.length;i++) {

        add[i].onmouseenter=function(){

          for(let j=0;j<bnimg.length;j++){
          color[j].style.display="none"
          bnimg[j].style.display="none";
          add[j].classList.remove("add1")
          }
          color[i].style.display="block"
          bnimg[i].style.display="block";
          add[i].classList.add("add1")

    }

   }


    var t=setInterval(fnn,2000)
     

       bll.onmouseenter=function(){
      	// alert(t)
      	clearInterval(t)
      }

       bll.onmouseleave=function(){
      	t=setInterval(fnn,2000)
      }

      var num=0; 
        function fnn(){
                     
           num++

           if(num==bnimg.length){
           	num=0;
           }

          for(let i=0;i<bnimg.length;i++){
            // console.log(i)
         if(i==bnimg.length){
         	i=0
         }
            color[i].style.display="none"
           	bnimg[i].style.display="none";
            add[i].className="add";
           }
       	 	 color[num].style.display="block"
            bnimg[num].style.display="block";
            add[num].className="add add1";
 
        }*/


// 侧导航
/*
    let aside=document.getElementsByClassName('aside')[0]
    let li1=document.querySelectorAll('.aside>li')
    // let libox1=li1.querySelectorAll('.aside>li>.youla')[0]
    let libox1=document.querySelectorAll('li>.youla')
    console.log(aside)
   

   
    for(let i=0;i<li1.length;i++){
       li1[i].onmouseenter=function(){
        libox1[i].style.display="block"
    }

    li1[i].onmouseleave=function(){
        libox1[i].style.display="none"
    }
  }*/


// tupian-x

/*  let tpleft=document.getElementsByClassName('tp-left')[0]
  let tplt=tpleft.getElementsByClassName('tpl-top')
  let tplbx=tpleft.getElementsByClassName('tpl-bottom')[0]
  let tplb=tplbx.getElementsByClassName('tpl-b')

  // console.log(tplb)
  // 
  let num1=0;
  var tplbimg;
  var tplbimg1;
   for(let i=0;i<tplb.length;i++){
      tplb[i].onmouseenter=function(){
        tplt[num1].style.display='none'
        tplt[i].style.display='block'

        tplbimg=tplb[num1].getElementsByClassName('top-img1')[0]
        tplbimg1=tplb[i].getElementsByClassName('top-img1')[0]
        tplbimg.style.display="none";
        tplbimg1.style.display="block";

        num1=i
        
      }
   }*/


// 固定定位
// 
/*   let gddx=document.getElementsByClassName('gdd-x')[0]
   let gdd1=gddx.querySelector('.gdd-x>.gdd:nth-child(1)')
   let gdd2=gddx.querySelector('.gdd-x>.gdd:nth-child(2)')
   let gdd3=gddx.querySelector('.gdd-x>.gdd:nth-child(3)')
   let gdd4=gddx.querySelector('.gdd-x>.gdd:nth-child(4)')
   let gdd5=gddx.querySelector('.gdd-x>.gdd:nth-child(5)')
   let gdd6=gddx.querySelector('.gdd-x>.gdd:nth-child(6)')
   let gdd7=gddx.querySelector('.gdd-x>.gdd:nth-child(7)')
   let gdd8=gddx.querySelector('.gdd-x>.gdd:nth-child(8)')
   let gdd9=gddx.querySelector('.gdd-x>.gdd:nth-child(9)')


   gdd1.onmouseenter=function(){
      gdd1.style.background','#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
   }

   gdd2.onmouseenter=function(){
    gdd1.style.background='#FF0036'
      gdd2.style.background='#EA5F8D'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }

   gdd3.onmouseenter=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#0AA6E8'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }

   gdd4.onmouseenter=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#64C333'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }


   gdd5.onmouseenter=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#F15453'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }


   gdd6.onmouseenter=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#19C8A9'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }

   gdd7.onmouseenter=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#F7A945'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }

   gdd8.onmouseenter=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#FF0036'
      gdd9.style.background='#ACACAC'


   
   }





 gdd1.onclick=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
   }

   gdd2.onclick=function(){
    gdd1.style.background='#FF0036'
      gdd2.style.background='#EA5F8D'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }

   gdd3.onclick=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#0AA6E8'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }

   gdd4.onclick=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#64C333'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }


   gdd5.onclick=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#F15453'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }


   gdd6.onclick=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#19C8A9'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }

   gdd7.onclick=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#F7A945'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
    }

   gdd8.onclick=function(){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#FF0036'
      gdd9.style.background='#ACACAC'


   
   }




   window.addEventListener('scroll',function(){

    let sh= document.body.scrollTop?document.body:document.documentElement
    let sht=sh.scrollTop;
    // console.log(sht)
    if(sht>=700&&sht<1700){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
      // gddx.style.display='block'

    }else if(sht>=1700&&sht<2200){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#EA5F8D'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
      // gddx.style.display='block'

    }else if(sht>=2200&&sht<2800){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#0AA6E8'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
      // gddx.style.display='block'

    }else if(sht>=2800&&sht<3300){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#64C333'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
      // gddx.style.display='block'

    }else if(sht>=3300&&sht<3900){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#F15453'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
      // gddx.style.display='block'

    }else if(sht>=3900&&sht<4400){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#19C8A9'
      gdd7.style.background='#666666'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
      // gddx.style.display='block'

    }else if(sht>=4400&&sht<5000){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#F7A945'
      gdd8.style.background='#ACACAC'
      gdd9.style.background='#ACACAC'
      // gddx.style.display='block'

    }else if(sht>=5000&&sht<5400){
      gdd1.style.background='#FF0036'
      gdd2.style.background='#666666'
      gdd3.style.background='#666666'
      gdd4.style.background='#666666'
      gdd5.style.background='#666666'
      gdd6.style.background='#666666'
      gdd7.style.background='#666666'
      gdd8.style.background='#FF0036'
      gdd9.style.background='#ACACAC'
      // gddx.style.display='block'

    }



   })*/


  
// 搜索栏
 /*   let flags=true;
    let sousuo=document.getElementsByClassName('dwbox')[0]
    console.log(sousuo)


      window.addEventListener('scroll',function(){


       let sh1= document.body.scrollTop?document.body:document.documentElement
       let sht1=sh1.scrollTop;
       // console.log(sht1)
      if(sht1>500){
      if(flags){ 

      flags=false;
      animate(sousuo,{top:0})
      // console.log(1)
    }
    }else{
      if(!flags){
      flags=true  
      animate(sousuo,{top:-50})
      // console.log(2)
      }
    }

   
 
   })


    let flag2=true;
     window.addEventListener('scroll',function(){
        let sh2= document.body.scrollTop?document.body:document.documentElement
       let sht2=sh2.scrollTop;
       if(sht2>500){
        if(flag2){
          flag2=false;
          animate(gddx,{width:35,height:332})
          // animate(gddx,{left:110,bottom:60})
          // gddx.style.display='block'
          console.log(1)
        }
          
       }else{
         if(!flag2){
          flag2=true;
          animate(gddx,{width:0,height:0})
          // animate(gddx,{left:110,bottom:60})
          // gddx.style.display='none'
         }
          
       }

     })*/

// 楼层跳转  按需加载
   let meili=document.querySelectorAll('.meili')
    let dbx=document.querySelector('.head-x')
    let arr=[]
    arr.push(dbx.offsetTop)
    let gdd=document.querySelectorAll('.gdd-x>.gdd')
    console.log(gdd)
    let ch=window.innerHeight;
    
    let cnx=document.querySelector('.ccnn-x')
    let headx=document.querySelector('.head-x')
    let tp=document.querySelector('.tupian-x')
    let md=document.querySelector('.module-x')
    let arr1=[];
    arr1.push(tp)
    arr1.push(md)
    meili.forEach((element)=>{
      arr1.push(element)
    })
    arr1.push(cnx)
  // console.log(arr1)
    meili.forEach((element)=>{
       arr.push(element.offsetTop)
       // console.log(arr)

    })

    arr.push(cnx.offsetTop)

    arr.push(headx.offsetTop)


    
    window.addEventListener('scroll',function(){

       let sh3= document.body.scrollTop?document.body:document.documentElement
       let sht3=sh3.scrollTop;

        for(let i=0;i<arr1.length;i++){


             if(sht3+ch>=arr1[i].offsetTop+200){
             let imgs=arr1[i].getElementsByTagName('img')
             // console.log(imgs)
             for(let i=0;i<imgs.length;i++){
              imgs[i].src=imgs[i].getAttribute('imgbox')
             }

             }

         }
  

// 
        for(let i=0;i<gdd.length;i++){

          gdd[i].onclick=function(){
            // sht3=arr[i]
            animate(sh3,{scrollTop:arr[i]-50})
          }
        }
    })






// 右边固定定位

/*      let grrx=document.getElementsByClassName('grr-x')[0]
      let grr=grrx.getElementsByClassName('grr')

      let grbox=document.getElementsByClassName('grbox')[0]

    console.log(grbox)
     

      for(let i=0;i<grr.length;i++){              
 let grrbjt1=grr[i].getElementsByClassName('grrbjt1')[0]
        let grrb=grr[i].getElementsByClassName('grrb')[0]
        grr[i].onmouseenter=function(){
          grrb.style.display='block'
          // grrb.style.left=-100+"px"
          animate(grrb,{left:-95},20)
        }

        grr[i].onmouseleave=function(){
          // grrb.style.left=-120+"px"
           animate(grrb,{left:-110})
          grrb.style.display='none'
          grbox.style.display='none';
         grrbjt1.style.display='none';
          
        }


        grr[i].onclick=function(){

        

         grbox.style.display='block';
         grrbjt1.style.display='block';

        }
      }


     


     let btmx1=document.getElementsByClassName('btmx')[0]
     let btm1=btmx1.getElementsByClassName('btm') 
     console.log(btm1)

     let now2=0;
     let next2=0;

     setInterval(fn21,2000)

     function fn21(){

      next2++
      if(next2==3){
        next2=0
      }
      
      btm1[now2].style.bottom=0+'px'
      btm1[next2].style.bottom=-50+'px'

      animate(btm1[now2],{bottom:50},20)
      animate(btm1[next2],{bottom:0})
      now2=next2;
     }*/

     
   






}