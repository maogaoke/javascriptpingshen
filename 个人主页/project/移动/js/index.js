{
let imgs=document.querySelectorAll(".banner1 li");
	let pagers=document.querySelectorAll(".pager li");
	let now=0;
	let z=10;
	setInterval(function(){
		imgs[now].classList.add("leftOut");
		pagers[now].classList.remove("active");
		now++;
		if(now===imgs.length){
			now=0;
		}
		imgs[now].classList.add("rightIn");
		imgs[now].style.zIndex=z++;
		pagers[now].classList.add("active");	
	},3000)
	imgs.forEach(function(ele){
		ele.addEventListener("animationend",function(){
			ele.className="";
		})
	})
	
}

{
	let yhconObj=document.querySelector(".yhcon ul");
	let yhcxObj=document.querySelector(".yhcx");
	let yhnext=document.querySelector(".yhnext");
	let yhpre=document.querySelector(".yhpre");
	let now=4;
	let dir="r";
	let flag=true;
	let t=setInterval(fn,2000);
		function fn(){
			if(dir=="r"){
				now++;
			}else if(dir=="l"){
				now--;
			}
			yhconObj.style.transition="all 1s";
			yhconObj.style.marginLeft=-295*now+"px";
		}
		
		yhconObj.addEventListener("transitionend",function(){
			if(now===12){
				yhconObj.style.transition="none";
				yhconObj.style.marginLeft="-1180px";
				now=4;
			}	
			if(now===0){
				yhconObj.style.transition="none";
				yhconObj.style.marginLeft="-2360px";
				now=8;
			}	
			flag=true;
		});
		yhcxObj.onmouseover=window.onblur=function(){
			clearInterval(t);
		};
		yhcxObj.onmouseout=window.onfocus=function(){
			t=setInterval(fn,2000);
		};
		
		yhpre.onclick=function(){
			dir="r";
			if(flag){
				flag=false;
				fn();
			}
		}
		yhnext.onclick=function(){
			dir="l";
			if(flag){
				flag=false;
				fn();
			}
		}
}

	
	
