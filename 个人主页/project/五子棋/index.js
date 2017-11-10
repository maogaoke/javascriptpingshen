let start=document.querySelector("#start");
let container=document.querySelector(".container");
let canvas=document.querySelector("canvas");
let restart=document.querySelector("#restart")
let cobj=canvas.getContext("2d");
start.onclick=function(){
	container.classList.add("show");
	
	restart.style.display="block";
	
}
let ai=document.querySelector("#ai");
let isAI=false;
ai.onfocus=function(){
	isAI=true;
}
let obj={};
let w=40;
let pos={};
let blank={};
drawBoard();
function drawBoard(){
	cobj.clearRect(0,0,600,600);
	cobj.strokeStyle="#000";
	cobj.beginPath();
	for(let i=0;i<15;i++){
		cobj.moveTo(20,i*w+20);
		cobj.lineTo(580,i*w+20);
		cobj.moveTo(i*w+20,20);
		cobj.lineTo(i*w+20,580);
	}
//	cobj.rect(20.5,20.5,579,579);
	cobj.stroke();
	drawPoint(3,3);
	drawPoint(3,11);
	drawPoint(7,7);
	drawPoint(11,3);
	drawPoint(11,11);
	function drawPoint(x,y){
		cobj.save();
		cobj.translate(x*w+20,y*w+20);
		cobj.beginPath();
		cobj.arc(0,0,6,0,2*Math.PI);
		cobj.fill();
		cobj.restore();
	}
	for(let i=0;i<15;i++){
		for(let k=0;k<15;k++){
			blank[fn(i,k)]=true;
		}
	}
}
function drawChess(x,y,color){
	cobj.save();
    cobj.translate(x*w+20,y*w+20);
    cobj.fillStyle=color;
    cobj.beginPath();
    cobj.arc(0,0,15,0,2*Math.PI);
    cobj.fill();
    cobj.restore();
    obj[fn(x,y)]=color;
    delete blank[fn(x,y)];
}
let flag=true;
canvas.onclick=function (e) {
    let x=Math.round((e.offsetX-20)/w);
    let y=Math.round((e.offsetY-20)/w);
    if(obj[fn(x,y)]){
        return;
    }
    if(flag){
        drawChess(x,y,"white");
        if(check(x,y,"white")===5){
            over("白");
        }
        if(isAI){
            let p=getpos();
            drawChess(p.x,p.y,"black");
            if(check(p.x,p.y,"black")===5){
//                  alert("黑棋获胜");
                over("黑")
            }
            return;
        }
    }else{
        drawChess(x,y,"black");
        if(check(x,y,"black")===5){
            // alert("获胜");
            over("黑");
        }
    }
    flag=!flag;
};
//    人机模式判断棋子该落到什么地方
function getpos() {
    let max1=0;
    let pos1={};
    for(let i in blank){
        let x=parseInt(i.split("_")[0]);
        let y=parseInt(i.split("_")[1]);
        let length=check(x,y,"white");
        if(length>max1){
            max1=length;
            pos1={x,y}
        }
    }

    let max2=0;
    let pos2={};
    for(let i in blank){
        let x=parseInt(i.split("_")[0]);
        let y=parseInt(i.split("_")[1]);
        let length=check(x,y,"black");
        if(length>max2){
            max2=length;
            pos2={x,y}
        }
    }
    if(max1>max2){
        return pos1;
    }else{
        return pos2;
    }
}
function fn(x,y){
	return x+"_"+y;
}
function check(x,y,color){
//        行
    let row=1;
    let i=1;
    while(obj[fn(x+i,y)]===color){
        row++;
        i++;
    }
    i=1;
    while (obj[fn(x-i,y)]===color){
        row++;
        i++;
    }
//        列
    let lie=1;
    i=1;
    while (obj[fn(x,y+i)]===color){
        lie++;
        i++;
    }
    i=1;
    while (obj[fn(x,y-i)]===color){
        lie++;
        i++;
    }
//        斜线
    let x1=1;
    i=1;
    while (obj[fn(x-i,y-i)]===color){
        x1++;
        i++;
    }
    i=1;
    while (obj[fn(x+i,y+i)]===color){
        x1++;
        i++;
    }
    let x2=1;
    i=1;
    while (obj[fn(x-i,y+i)]===color){
        x2++;
        i++;
    }
    i=1;
    while (obj[fn(x+i,y-i)]===color){
        x2++;
        i++;
    }
    return Math.max(row,lie,x1,x2)
}

//    游戏结束
let shadow=document.querySelector(".shadow");
let h1=document.querySelector("h1");
function over(name) {
    imgbox.style.display="none";
    restart.style.display="block";
    shadow.style.display="block";
    h1.innerHTML=name+"棋获胜";
}
//    重新开始
restart.onclick=function () {
    // imgbox.innerHTML="";
    shadow.style.display="none";
    container.classList.remove("show");
    start.style.display="block";
    cobj.clearRect(0,0,600,600);
    obj={};
    // imgbox.style.backgroundImage="none";
    download.style.display="none";
    drawBoard();

};

//    重绘棋谱
let output=document.querySelector("#output");
let imgbox=document.querySelector(".imgbox");
let download=document.querySelector("#download");
output.onclick=function () {
    imgbox.innerHTML="";
    setnum();
    h1.innerHTML="";
    imgbox.style.display="block";
    download.style.display="block";
    let url=canvas.toDataURL();
    let newimg=new Image();
    newimg.src=url;
    imgbox.appendChild(newimg);
    download.href=url;
    download.setAttribute("download","棋谱.png")
};
let music=document.querySelector(".music");
let audio=document.querySelector("audio");
let kaiguan=true;
music.onclick=function () {
    if(kaiguan){
        music.style.animationPlayState="paused";
        audio.pause();
    }else{
        music.style.animationPlayState="running";
        audio.play();
    }
    kaiguan=!kaiguan;
};

function setnum() {
    let n=1;
    for(let i in obj){
        let x=parseInt(i.split("_")[0]);
        let y=parseInt(i.split("_")[1]);
        cobj.textAlign="center";
        cobj.textBaseline="middle";
        cobj.font="20px 微软雅黑";
        cobj.save();
        if(obj[i]==="black"){
            cobj.fillStyle="white";
        }else{
            cobj.fillStyle="black";
        }
        cobj.translate(x*w+20,y*w+20);
        cobj.fillText(n++,0,0);
        cobj.restore();
    }
}






/*let output=document.querySelector(".output");
let imgbox=document.querySelector(".imgbox");
let download=document.querySelector("#download")
output.onclick=function(){
	let url=canvas.toDataURL();
	let newimg=new Image();
	newimg.src=url;
	imgbox.appendChild(newimg);
	download.href=url;
	download.setAttribute("download","棋谱.png");
}*/
