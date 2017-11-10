
class Game{
    constructor(){    // 定义属性
        this.leftObj=document.querySelector(".scene");
        this.endOre=document.querySelector(".endore");
        this.scorEle=document.querySelector(".scor");
        this.scor=0;
        this.stateEle=document.querySelector(".state");
        this.state=1;
        this.lifeEle=document.querySelector(".life");
        this.life=5;
        this.num=3;     //下落的字母个数
        this.Obj={};  //保存当前字母以及字母的详细信息
        this.speed=5;       //当前字母下落的速度
        this.h=window.innerHeight;
        this.t= 0;      //当前setInterval 的ID
        this.flag2=true;
    }

    start(){
        for(let i=0;i<this.num;i++){
            this._createLetter();
        }
        this._move();
        this._keydown();
    }
    //创建单个子母
    _createLetter(){
        let newdiv=document.createElement("div");
        newdiv.className="letter";
        do{
            var randomNum=Math.floor(Math.random()*26+65);    //获得随机的数字
            var randomLetter=String.fromCharCode(randomNum);    //随机的字母
        }while (this.Obj[randomLetter]);
        newdiv.innerHTML=randomLetter;    //修改字母图片
//            newdiv.style.backgroundImage="url(./img/"+randomLetter+".png)";
        do{
            var randomLeft=Math.floor(Math.random()*900);
        }while (this._checkleft(randomLeft));
        let randomTop=-Math.floor(Math.random()*100);
        newdiv.style.left=randomLeft+"px";
        newdiv.style.top=randomTop+"px";
        this.leftObj.appendChild(newdiv);
        this.Obj[randomLetter]={left:randomLeft,top:randomTop,ele:newdiv}
    }
    //判断当前位置是否和其他位置重复的方法
    _checkleft(newleft){
        for(let i in this.Obj){
            if(newleft > this.Obj[i].left-100 && newleft < this.Obj[i].left+100){
                return true;
            }
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
    _integral(){
        
    }
    _keydown(){
        document.onkeydown=function (e) {
            let kc=e.keyCode;
            let letter=String.fromCharCode(kc);
            if(this.Obj[letter]){
                this.leftObj.removeChild(this.Obj[letter].ele);
                delete this.Obj[letter];
                this._createLetter();
                this.scor++;
                this.scorEle.innerHTML=this.scor;
                if(this.scor%10 ===0){
                    this._nextState();
                }
            }
        }.bind(this);
    }
    _nextState(){
        this.state++;
        this.stateEle.innerHTML=this.state;
        if(this.state<=3){
            this._createLetter()
        }else {
            this.speed+=2;
        }
    }
    pause(){
        clearInterval(this.t);
    }
    running(){
        this._move();
    }
    gameover(){
        this.scor=0;
        this.scorEle.innerHTML=0;
        this.state=1;
        this.stateEle.innerHTML=1;
        this.life=5;
        this.lifeEle.innerHTML=5;
        this.num=3;
        this.Obj={};
        this.speed=5;
        clearInterval(this.t);
        this.leftObj.innerHTML="";
        pauseBtn.innerHTML="暂停";
        //pauseBtn.style.color=" #188DC3";
    }
}
let game=new Game();
let startBtn=document.querySelector(".start");
startBtn.onclick=function () {
    pauseBtn.style.display="block";
    if(game.flag2){
        game.start();
        game.flag2=false;
    }
};
let pauseBtn=document.querySelector(".pause");
let flag=false;
startBtn.addEventListener("click",function () {

    flag=true;
    pauseBtn.onclick=function () {
        if(flag){
            game.pause();
            pauseBtn.innerHTML="继续";
            //pauseBtn.style.color= "#EBC700";
        }else{
            game.running();
            pauseBtn.innerHTML="暂停";
            //pauseBtn.style.color=" #188DC3"
        }
        flag=!flag;
    };
});

let over=document.querySelector(".over");

over.onclick=function () {
    pauseBtn.style.display="none";
    game.flag2=true;
    game.gameover();
}