$(function(){
	//banner轮播图
		//自动轮播
		let banT=setInterval(banFn,3000);
		let banNum=0;
		function banFn(){
			banNum++;
			if (banNum>=$('.banner-pic>li').length) {
				banNum=0;
			}
			$('.banner-pic>li').css({opacity:0.3,zIndex:0});
			$('.banner-btn>li').css({background:'rgba(0,0,0,0.25)'});
			$('.banner-btn>li').eq(banNum).css({background:'rgba(0,0,0,0.75)'});
			$('.banner-pic>li').eq(banNum).css({opacity:1,zIndex:1});
		}
		//鼠标移入移出效果
		$('.banner').mouseenter(function(){
			clearInterval(banT);
		})
		$('.banner').mouseleave(function(){
			banT=setInterval(banFn,3000);
		})
		//反向轮播
		function banFn1(){
			banNum--;
			if (banNum<0) {
				banNum=$('.banner-pic>li').length-1;
			}
			$('.banner-pic>li').css({opacity:0.3,zIndex:0});
			$('.banner-btn>li').css({background:'rgba(0,0,0,0.25)'});
			$('.banner-btn>li').eq(banNum).css({background:'rgba(0,0,0,0.75)'});
			$('.banner-pic>li').eq(banNum).css({opacity:1,zIndex:1});
		}
		//圆点
		let banBtn=$('.banner-btn>li')
		for(let i=0;i<banBtn.length;i++){
			banBtn.eq(i).click(function(){
				$('.banner-pic>li').eq(banNum).css({opacity:0.3,zIndex:0});
				$('.banner-pic>li').eq(i).css({opacity:1,zIndex:1});
				banBtn.eq(banNum).css({background:'rgba(0,0,0,0.25)'});
				banBtn.eq(i).css({background:'rgba(0,0,0,0.75)'});
				banNum=i;
			})
		}
		//左边按钮
		$('.go').click(banFn);
		//右边按钮
		$('.forward').click(banFn1);
		//浏览器失去焦点
		$(window).blur(function(){
			clearInterval(banT);
		})
		$(window).focus(function(){
			banT=setInterval(banFn,3000);
		})
	//produce产品展示
		$(".pronav-all").click(function(){
			$(".produce-nav>li>a").css({background:"#FEFEFE",color:"#76838f"});
			$(".pronav-all>a").css({background:"#62A8EA",color:"#fff"});
			$(this).css({background:"#62A8EA",color:"#fff"});
			$(".produce-lis>li").css({display:"block"});
		})
		$(".pronav-sofa").click(function(){
			$(".produce-nav>li>a").css({background:"#FEFEFE",color:"#76838f"});
			$(".pronav-sofa>a").css({background:"#62A8EA",color:"#fff"});
			$(".produce-lis>li").css({display:"none"});
			$(".produce-lis>.sofa").css({display:"block"});
		})
		$(".pronav-teaTable").click(function(){
			$(".produce-nav>li>a").css({background:"#FEFEFE",color:"#76838f"});
			$(".pronav-teaTable>a").css({background:"#62A8EA",color:"#fff"});
			$(".produce-lis>li").css({display:"none"});
			$(".produce-lis>.teaTable").css({display:"block"});
		})
		$(".pronav-chair").click(function(){
			$(".produce-nav>li>a").css({background:"#FEFEFE",color:"#76838f"});
			$(".pronav-chair>a").css({background:"#62A8EA",color:"#fff"});
			$(".produce-lis>li").css({display:"none"});
			$(".produce-lis>.chair").css({display:"block"});
		})
		$(".pronav-ditable").click(function(){
			$(".produce-nav>li>a").css({background:"#FEFEFE",color:"#76838f"});
			$(".pronav-ditable>a").css({background:"#62A8EA",color:"#fff"});
			$(".produce-lis>li").css({display:"none"});
			$(".produce-lis>.dining-table").css({display:"block"});
		})
		$(".pronav-ornam").click(function(){
			$(".produce-nav>li>a").css({background:"#FEFEFE",color:"#76838f"});
			$(".pronav-ornam>a").css({background:"#62A8EA",color:"#fff"});
			$(".produce-lis>li").css({display:"none"});
			$(".produce-lis>.ornam").css({display:"block"});
		})
		
		$(".icon-xiangshangjiantouarrowup").click(function(){
		$("html").animate({scrollTop:0})
	})
})