/*let scene=document.querySelector(".scene");
	let obj={};
	function createletter(){
		let newdiv=document.createElement("div");
		newdiv.className="letter";
		do{
			var randomNum=Math.floor(Math.random()*26+65);
			var randomletter=String.fromCharCode(randomNum);
		}while(obj[randomletter]);		
		newdiv.innerHTML=randomletter;
		do{
			var randomLeft=Math.floor(Math.random()*900);
		}while(checkLeft(randomLeft));
		
		let randomTop=- Math.floor(Math.random()*100);
		newdiv.style.left=randomLeft+"px";
		newdiv.style.top=randomTop+"px";
		scene.appendChild(newdiv);
		obj[randomletter]={left:randomLeft,top:randomTop,ele:newdiv};
	}
	function checkLeft(newleft){
		for(let i in obj){
			if(newleft>obj[i].left-100&&newleft<obj[i].left+100){
  			return true;
			}
		}
	}
	setInterval(function(){
		for(let i in obj){
			let top=obj[i].top;
			top+=5;
			obj[i].ele.style.top=top+"px";
			obj[i].top=top;
		}
	},50)
	document.onkeydown=function(e){
		let kc=e.keyCode;
		let letter=String.fromCharCode(kc);
		if(obj[letter]){
			scene.removeChild(obj[letter].ele);
			delete obj[letter];
			createletter();
		}
	}
	for(let i=0;i<3;i++){
		createletter();
	}*/
	
	
	class Game{
		constructor(){
			this.scene=document.querySelector(".scene");
			this.scorEle=document.querySelector(".scor")
			this.stateEle=document.querySelector(".state");
			this.life=setting.life||5;
			this.lifeEle=document.querySelector(".life");
			this.h=window.innerHeight;
			this._init();
		}
		
		_init(){
			this.lifeEle.innerHTML=this.life;
			this.scor=0;
			this.scorEle.innerHTML=this.scor;
			this.state=1;
			this.stateEle.innerHTML=this.state;
			this.obj={};
			this.num=3;
			this.speed=5;
			this.t=0;
			this.flag=true;
		}
		
		//创建字
		_createLetter(){
			let newdiv=document.createElement("div");
			
			newdiv.className="letter";
			do{
				var randomNum=Math.floor(Math.random()*26+65);
				var randomletter=String.fromCharCode(randomNum);
			}while(this.obj[randomletter]);
			this.obj[randomletter]=1;
			newdiv.innerHTML=randomletter;
			do{
				var randomLeft=Math.floor(Math.random()*900);
			}while(this.checkLeft(randomLeft));
			
			let randomTop=- Math.floor(Math.random()*100);
			newdiv.style.left=randomLeft+"px";
			newdiv.style.top=randomTop+"px";
			this.scene.appendChild(newdiv);
			this.obj[randomletter]={left:randomLeft,top:randomTop,ele:newdiv};
			
			
		}
		_checkLeft(left){
				for(let i in obj){
					let obj=this.obj[i];
					if(left>obj.left-100&&left<obj.left+100){
		  			return true;
					}
				}
			}
		let startBtn=document.querySelector(".start");
		startBtn.onclick=function(){
			if(game.flag){
				game.start();
				this.flag=false;
			}
		}
		start(){
			for(let i=0;i<this.num;i++){
				this._createLetter();
				this._move();
				this._keydown();
			}
		}
		_move(){
			this.t=setInterval(function () {
            for(let i in this.Obj){
                let top=this.Obj[i].top;
                top+=this.speed;
                this.Obj[i].ele.style.top=top+"px";
                this.Obj[i].top=top;
                if(this.Obj[i].top>this.h){
                    this.life--;
                    this.lifeEle.innerHTML=this.life;
                    this.leftObj.removeChild(this.Obj[i].ele);
                    delete this.Obj[i];
                    this._createLetter();
                    if(this.life===0){
                        if(confirm("游戏结束，得分"+this.scor+"是否继续")){
                            history.go(0);
                        }
                    }
                }
            }
        }.bind(this),50)
		}
		_nextstate(){
			this.state++;
			this.stateEle.innerHTML=this.state;
			if(this.state<=3){
				this._createLetter();
			}else{
				this.speed+=1;
			}
		}
		_gameover(){
			alert("游戏结束，得分为"+this.scor);
			this._init();
		}
		
		
	}
	let game=new Game({life:10});