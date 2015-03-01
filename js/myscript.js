// device APIs are available
    //
    var media;
    var highscore;
        	
var speeda;
var speedbbb;
var speedt;
var speedl;
var speedb;
var speedr;
var optiona;
var optionb;
var optionc;
var optiond;
var optione;
var back;
var bg1;
var bg2;
var bg3;
var bg4;
var bg5;
var bg6;
var bg7;
var bg8;
var bg9;
var bg10;
var bg11;
var bg12;
var bg13;
var bg14;
var bg15;
var bg16;

var bgg;


var scr;
var livescr;
var variationw;
var variationh;

var gamename;
var information;
var border;

var la;
var ta;
var ha=10;
var wa=10;


var x;
var y;


var ll;
var tt;
var hh;
var ww;


var score=-1;
var curentscore=0;
var htp=0;

var link="https://play.google.com/store/apps/details?id=com.imangi.templerun";
var image="www/myimg.jpg";
var message="";

var params = {
    client_id: '651010955617-i5nog5noq43b52l7d34na4e90ih0nj1o.apps.googleusercontent.com',
    client_secret: 'iEDFnDYQ300cNXi1cEOxVfMy',
    scope: 'https://www.googleapis.com/auth/games',
    callback: function(error, tokens) {
        if (error)
        {}
        else {
        }
    }
};

var l;
var t;
var ht;
var wt;
var bug=0;


var flag=0;
var lef=0;
var tp=0;
var h=0;
var w=0;


	var setdetect;
	var setattack;
var timer=2800;

var attacktimer;
var gmovr=0;
var evehand=0;

    
    
    

function onLoad()
{
document.addEventListener("deviceready", onDeviceReady, false);
}
    
    
    function onDeviceReady() {
    document.addEventListener("backbutton", backKeyDown, true); 
    
    	highscore=window.localStorage.getItem("highscore");

	if(!highscore)
	{
		window.localStorage.setItem("highscore",0)
		highscore=window.localStorage.getItem("highscore");
		
	}
	mycheck();

        		     }
    



    function backKeyDown() { 
     
     evehand=0;
     console.log("hii");
     if(htp==0)
     {
     navigator.app.exitApp(); 
     
     }
     else
     {
     htp=0;
     
     
     speedbbb.stop(true);
     speedbbb.hide();
     speedbbb.css("left","45%");
speedbbb.css("top","50%");
speedbbb.css("height","20%");
speedbbb.css("width","20%");
     
      speedr.stop();
     speedr.hide();
speedr.css("top","50%");
speedr.css("left","100%");
     
     
          speedb.stop();
     speedb.hide();
speedb.css("top","100%");
speedb.css("left","50%");
     
     
bgg.show();

information.fadeOut();
back.fadeOut();
gamename.fadeIn();
optiona.fadeIn();

optionb.fadeIn();

optionc.fadeIn();

optiond.fadeIn();

optione.fadeIn();

     
     
     
       }
     
     
}

$(document).ready(function(){
    FastClick.attach(document.body);

	
	
speeda=$("#a");
speedbbb=$("#bbb");
speedt=$("#t");
speedl=$("#l");
speedb=$("#b");
speedr=$("#r");

optiona=$("#opa");
optionb=$("#opb");
optionc=$("#opc");
optiond=$("#opd");
optione=$("#ope");

bg1=$("#bg1");
bg2=$("#bg2");
bg3=$("#bg3");
bg4=$("#bg4");
bg5=$("#bg5");
bg6=$("#bg6");
bg7=$("#bg7");
bg8=$("#bg8");
bg9=$("#bg9");
bg10=$("#bg10");
bg11=$("#bg11");
bg12=$("#bg12");
bg13=$("#bg13");
bg14=$("#bg14");
bg15=$("#bg15");
bg16=$("#bg16");

bgg=$(".bgg");


gamename=$(".n");
information=$("#info");
border=$(".grad");

dispscr=$("#dispscr");
scr=$("#score");
hscr=$("#hscore");
livescr=$("#livescore");


	variationw=speedt.width();


	variationh=speedl.height();

	
	var play=optiona;
    var htplay=optionb;
     back=$("#backop");
     var lead=optiond;
     var share=optione;


back[0].addEventListener('touchstart',
function() {

evehand=0;
htp=0;
speedbbb.fadeOut(1000,function(){

speedbbb.css("left","45%");
speedbbb.css("top","50%");
speedbbb.css("height","20%");
speedbbb.css("width","20%");});

information.fadeOut();
back.fadeOut();
gamename.fadeIn();

bgg.show();

optiona.fadeIn();

optionb.fadeIn();

optionc.fadeIn();

optiond.fadeIn();

optione.fadeIn();


},false);


htplay[0].addEventListener('touchstart',
function() {
	
	if(evehand!=1)
	{
	evehand=1;
	
	htp=1;
dispscr.fadeOut();
livescr.hide();

gamename.fadeOut();

bgg.hide();

optiona.fadeOut();

optionb.fadeOut();

optionc.fadeOut();

optiond.fadeOut();

optione.fadeOut();

information.fadeIn();
speedbbb.fadeIn();

speedbbb.velocity({left:'65%',width:'0%'},400).velocity({width:'20%'},400).velocity({height:'0%'},400).velocity({top:'35%',height:'15%'},400).velocity({width:'0%'},400,function(){


}).velocity({left:'45%',width:'20%'},400,function(){
if(htp==1){
speedr.css("top","45%");
speedr.show();
speedr.velocity({left:'-2%'},1800,function(){
speedr.hide();
speedr.css("top","50%");
speedr.css("left","100%");
});
}
}).velocity({top:'50%',height:'0%'},450).velocity({height:'20%'},450,function(){

if(htp==1){
speedb.css("left","55%");
speedb.show();
speedb.velocity({top:'-2%'},1800,function(){
speedb.hide();
speedb.css("top","100%");
speedb.css("left","50%");

});
}
}).velocity({width:'0%'},450).velocity({left:'25%',width:'20%'},450,function(){

back.fadeIn();


});

}


},false);
play[0].addEventListener('touchstart', function() {
	

if(evehand!=1)
{
	evehand=1;
	    	media=new Media("/android_asset/www/flyby-Conor-1500306612.mp3");
		
dispscr.fadeOut();
livescr.text(score+1);
livescr.show();

bgg.hide();

optiona.fadeOut();

optionb.fadeOut();

optionc.fadeOut();

optiond.fadeOut();

optione.fadeOut();

gamename.fadeOut();
border.fadeOut();
	speeda.css("left","40%");

		speeda.css("top","40%");
		

		speeda.css("width","20%");
		
		speeda.css("height","20%");
		
setTimeout(function(){
speeda.fadeIn();


setdetect=setInterval(detect,1);

//setattack=setInterval(timeradjust,3000);

setTimeout(function(){
attack(timer);
gmovr=0;
},3000);



		     },800);

}	
	});
	


	share[0].addEventListener('touchstart',function(event){
	
	message="WIDTH x HEIGHT\nMy Score:"+curentscore+"\nMy Best:"+highscore+"\n";

window.plugins.socialsharing.share(message,'WIDTH x HEIGHT',image,link);
	},false);

	

lead[0].addEventListener('touchstart',function(event){

window.plugins.webintent.startActivity({
      action: window.plugins.webintent.ACTION_VIEW,
      url: 'market://'
    },
    function() {alert('success')}, 
    function(errorMsg) {alert('Failed to startActivity errorMsg=' + errorMsg)}
);

},false);
	
	
	


var diffx,diffy,startX,offsetX,startY,offsetY,el = $(document);




el[0].addEventListener('touchstart', function(event) {
 
 event.preventDefault();
 
 //  offsetX = ($(window).width()-el.outerWidth(true))/2;
  startX = event.targetTouches[0].pageX;
 
  // offsetY = ($(window).height()-el.outerHeight(true))/2;
  startY = event.targetTouches[0].pageY;
 

 lef=parseInt(speeda.css("left"),10);
 tp=parseInt(speeda.css("top"),10);
 h=speeda.height();
 w=speeda.width();
 
 
 



if(startX>=lef&&startX<=(lef+w)&&startY<=(tp+h+60)&&startY>=(tp+(2*h/3)))
{
    	flag=1;
//	navigator.notification.vibrate(12);
}
else if(startX>=lef&&startX<=(lef+w)&&startY<=(tp+(h/3))&&startY>=(tp-60))
 {
 	flag=2;
//	navigator.notification.vibrate(12);
}
else if(startY>=tp&&startY<=(tp+h)&&startX<=(lef+w+60)&&startX>=(lef+(2*w/3)))
{
	flag=3;
//	navigator.notification.vibrate(12);
}
else if(startY>=tp&&startY<=(tp+h)&&startX<=(lef+(w/3))&&startX>=(lef-60))
{
	flag=4;
//	navigator.notification.vibrate(12);
}

    



},false);




el[0].addEventListener("touchmove", function(event) {


 
 event.preventDefault();
 
  diffx = (event.changedTouches[0].pageX);
 
  diffy = (event.changedTouches[0].pageY);
 
 
 
 /*
if(flag!=0)
{
tchmove[0]=[lef,w,(diffy<tp)?diffy:tp,Math.abs(tp-diffy)];
tchmove[1]=[lef,w,(diffy<tp+h)?diffy:tp+h,Math.abs(tp+h-diffy)];
tchmove[2]=[(diffx<lef)?diffx:lef,Math.abs(lef-diffx),tp,h];
tchmove[3]=[(diffx<lef+w)?diffx:lef+w,Math.abs(w+lef-diffx),tp,h];
    speeda.velocity({
    					left:tchmove[flag-1][0]
    					,width:tchmove[flag-1][1]
                       	,top:tchmove[flag-1][2]
                       	,height:tchmove[flag-1][3]
                       	
                   },{duration:1,easing:"linear",mobileHA:true});
}
 */
 
 

if(flag==1)
{


    if(diffy<tp)
{


    speeda.css({"top":diffy,"height":tp-diffy});


}


else
{
        speeda.css({"top":tp,"height":diffy-tp});

}
}
else if(flag==2)
{


    if(diffy<tp+h)
{


            speeda.css({"top":diffy,"height":h+tp-diffy});






}


else
{
            speeda.css({"top":tp+h,"height":diffy-(tp+h)});

}


}




else if(flag==3)
{


    if(diffx<lef)
{


    speeda.css({"left":diffx,"width":lef-diffx});






}


else
{
        speeda.css({"left":lef,"width":diffx-lef});

}
}




else if(flag==4)
{




    if(diffx<lef+w)
{


        speeda.css({"left":diffx,"width":w+lef-diffx});






}


else
{
        speeda.css({"left":lef+w,"width":diffx-(lef+w)});

}


}










},false);


el[0].addEventListener("touchend", function(e) {
 e.preventDefault();
flag=0;


},false);


});




function gameover()
{
	evehand=0;
	gmovr=1;
	timer=3000;

		clearInterval(setdetect);
		//clearInterval(setattack);

		dispscr.fadeIn();	
		speeda.fadeOut();
		livescr.hide();
	

optiona.fadeIn();

optionb.fadeIn();

optionc.fadeIn();

optiond.fadeIn();

optione.fadeIn();
gamename.fadeIn();
border.fadeIn();
bgg.show();

if(score>highscore)
{
	highscore=score;
	window.localStorage.setItem("highscore",highscore);
	
}


scr.text(score);
hscr.text(highscore);
curentscore=score;
score=-1;


	

		
	
}


function detect(){




 ll=parseInt(speeda.css("left"),10);
 tt=parseInt(speeda.css("top"),10);
 hh=speeda.height();
 ww=speeda.width();






if(bug==1)
	{


 la=parseInt(speedt.css("left"),10);
 ta=parseInt(speedt.css("top"),10);




		if(((ta+ha)>=tt&&(ta+ha)<=(tt+hh))&&((la<=(ll+ww))&&((la+wa)>=ll)))
		{
			
				gameover();


		}






	}






else if(bug==2)
	{


 la=parseInt(speedl.css("left"),10);
 ta=parseInt(speedl.css("top"),10);




		if(((la+wa)>=ll&&(la+wa)<=(ll+ww))&&((ta<=(tt+hh))&&((ta+ha)>=tt)))
		{
			

				gameover();


		}






	}


else if(bug==3)
	{


 la=parseInt(speedb.css("left"),10);
 ta=parseInt(speedb.css("top"),10);




		if(((ta)>=tt&&(ta)<=(tt+hh))&&((la<=(ll+ww))&&((la+wa)>=ll)))
		{
			

				gameover();


		}






	}


else if(bug==4)
	{


 la=parseInt(speedr.css("left"),10);
 ta=parseInt(speedr.css("top"),10);




		if(((la)>=ll&&(la)<=(ll+ww))&&((ta<=(tt+hh))&&((ta+ha)>=tt)))
		{
			

				gameover();

		}






	}






}


/*var timeradjust=function(){
clearInterval(setattack);
if(timer>2000)
{
timer=timer-200;
attack(timer);
setattack=setInterval(timeradjust,timer+200);
}
else
{
attack(2000);
setattack=setInterval(function(){attack(timer);},timer+200);
}
}
*/

function mycheck()
{

var jk=$(window).height()*0.14;
var pk=$(window).width()*0.014;
bg1.css("width",jk);
bg2.css("width",jk*2);
bg3.css("width",jk*3);
bg4.css("width",jk*4);
bg5.css("width",jk*5);
bg6.css("width",jk*6);
bg7.css("width",jk*7);
bg8.css("width",jk*8);
bg9.css("width",jk*9);
bg10.css("width",jk*10);

bg11.css("width",pk*(85.72));
bg12.css("width",pk*(71.44));
bg13.css("width",pk*(57.16));
bg14.css("width",pk*(42.88));
bg15.css("width",pk*(28.60));
bg16.css("width",pk*(14.32));



setTimeout(function(){
speedbbb.fadeIn();

speedbbb.velocity({width:'20%'},250) .velocity({left:'30%',width:'0%'},250) .velocity({width:'30%'},250) .velocity({left:'60%',width:'0%'},250) .velocity({width:'30%'},250).velocity({top:'70%',height:'0%'},250) .velocity({height:'20%'},250) 
.velocity({width:'0%'},250) .velocity({left:'45%',width:'20%'},250) .velocity({height:'0%'},250)
.velocity({top:'50%',height:'20%'},250,function (){




speedbbb.fadeOut();

bgg.show();

gamename.fadeIn();

optiona.fadeIn();

optionb.fadeIn();

optionc.fadeIn();

optiond.fadeIn();

optione.fadeIn();
});

},200); 



}


function leaderboards() {
    gapi.client.request({
        path: '/games/v1/leaderboards',
        params: {maxResults: 5},
        callback: function(response) {
 
        }});
}


function attack(attspeed){

media.play();



 l=parseInt(speeda.css("left"),10);
 t=parseInt(speeda.css("top"),10);
 ht=speeda.height();
 wt=speeda.width();


 


  y = Math.floor((Math.random() * 10)+1);


  x = Math.floor((Math.random() * 10));


if(y>5)
y=y-5;


var k1=l+((wt*(y-1))/4)-(variationw/2);
var k2=t+((ht*(y-1))/4)-(variationh/2);



if(x==0||x==4||x==8)
{
	speedt.css("left",k1);
speedt.show();
	bug=1;
speedt.velocity({
top:'100%'
},{duration:attspeed,complete:function(){

bug=0;
speedt.hide();
speedt.css("top","-2%");

if(timer>2000){timer=timer-200;}

if(gmovr==0){
attacktimer=setTimeout(function(){attack(timer);},200);
}


}});


}


else if(x==1||x==5||x==9)
{
	speedl.css("top",k2);
speedl.show();
	bug=2;
speedl.velocity({
left:'100%'
},{duration:attspeed,complete:function(){


bug=0;
speedl.hide();
speedl.css("left","-2%");

if(timer>2000){timer=timer-200;}

if(gmovr==0){
attacktimer=setTimeout(function(){attack(timer);},200);
}

}});


}
else if(x==2||x==6)
{
	speedb.css("left",k1);
speedb.show();
	bug=3;
speedb.velocity({
top:'-2%'
},{duration:attspeed,complete:function(){


bug=0;
speedb.hide();
speedb.css("top","100%");

if(timer>2000){timer=timer-200;}

if(gmovr==0){
attacktimer=setTimeout(function(){attack(timer);},200);
}

}});




}


else if(x==3||x==7)
{
	speedr.css("top",k2);
speedr.show();
	bug=4;
speedr.velocity({
left:'-2%'
},{duration:attspeed,complete:function(){


bug=0;
speedr.hide();
speedr.css("left","100%");

if(timer>2000){timer=timer-200;}

if(gmovr==0){
attacktimer=setTimeout(function(){attack(timer);},200);
}

}});




}
score++;
livescr.text(score);


}
