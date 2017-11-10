	let obj;
	let topbar=document.querySelector(".topbar");
	document.onscroll=function(){
		obj=document.body.scrollTop===0?document.documentElement:document.body;
		
		if(obj.scrollTop>700){
			topbar.style.top=0;
		}else{
			topbar.style.top="-50px";
		}
	}