
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
     var back=$("#backop");
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

optiona.fadeOut();

optionb.fadeOut();

optionc.fadeOut();

optiond.fadeOut();

optione.fadeOut();

information.fadeIn();
speedbbb.fadeIn();

speedbbb.animate({left:'65%',width:'0%'},400).animate({width:'20%'},400).animate({height:'0%'},400).animate({top:'35%',height:'15%'},400).animate({width:'0%'},400,function(){


}).animate({left:'45%',width:'20%'},400,function(){
if(htp==1){
speedr.css("top","45%");
speedr.show();
speedr.animate({left:'-2%'},1800,function(){
speedr.hide();
speedr.css("top","50%");
speedr.css("left","100%");
});
}
}).animate({top:'50%',height:'0%'},450).animate({height:'20%'},450,function(){

if(htp==1){
speedb.css("left","55%");
speedb.show();
speedb.animate({top:'-2%'},1800,function(){
speedb.hide();
speedb.css("top","100%");
speedb.css("left","50%");

});
}
}).animate({width:'0%'},450).animate({left:'25%',width:'20%'},450,function(){

back.fadeIn();


});

}


},false);
play[0].addEventListener('touchstart', function() {
	

if(evehand!=1)
{
	evehand=1;
	    	//media=new Media("/android_asset/www/flyby-Conor-1500306612.mp3");
		
dispscr.fadeOut();
livescr.text(score+1);
livescr.show();

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
},300);



		     },500);

}	
	});
	


	share[0].addEventListener('touchstart',function(event){
	
	message="WIDTH x HEIGHT\nMy Score:"+curentscore+"\nMy Best:"+highscore+"\n";

window.plugins.socialsharing.share(message,'WIDTH x HEIGHT',image,link);
	},false);

	

lead[0].addEventListener('touchstart',function(event){

window.plugins.webintent.startActivity({
      action: window.plugins.webintent.ACTION_VIEW,
      url: 'facebook'
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

    speeda.animate({
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


    speeda.animate({
                       top:diffy
                       ,height:tp-diffy


                   },{duration:1,easing:"linear"});





}


else
{
    speeda.animate({
                       top:tp
                       ,height:(diffy)-tp


                   },{duration:1,easing:"linear"});
}
}
else if(flag==2)
{


    if(diffy<tp+h)
{


    speeda.animate({
                       top:diffy
                       ,height:h+tp-diffy


                   },{duration:1,easing:"linear"});






}


else
{
    speeda.animate({
                       top:tp+h
                       ,height:(diffy)-(tp+h)


                   },{duration:1,easing:"linear"});
}


}




else if(flag==3)
{


    if(diffx<lef)
{


    speeda.animate({
                       left:diffx
                       ,width:lef-diffx


                   },{duration:1,easing:"linear"});






}


else
{
    speeda.animate({
                       left:lef
                       ,width:(diffx)-lef


                   },{duration:1,easing:"linear"});
}
}




else if(flag==4)
{




    if(diffx<lef+w)
{


    speeda.animate({
                       left:diffx
                       ,width:w+lef-diffx


                   },{duration:1,easing:"linear"});






}


else
{
    speeda.animate({
                       left:lef+w
                       ,width:(diffx)-(lef+w)


                   },{duration:1,easing:"linear"});
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
	

setTimeout(function(){


	if(bug==1)
	{
	speedt.stop(false,true);
	}
	elseif(bug==2)
	{
	speedl.stop(false,true);
	}
	elseif(bug==3)
	{
	speedb.stop(false,true);
	}
	elseif(bug==4)
	{
	speedr.stop(false,true);
	}
	
},200);
		clearInterval(setdetect);
		//clearInterval(setattack);

		dispscr.fadeIn();	
		speeda.fadeOut();
		livescr.hide();
	

optiona.fadeIn(500);

optionb.fadeIn(500);

optionc.fadeIn(500);

optiond.fadeIn(500);

optione.fadeIn(500);
gamename.fadeIn();
border.fadeIn();

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

setTimeout(function(){
speedbbb.fadeIn();

speedbbb.animate({width:'20%'},250) .animate({left:'30%',width:'0%'},250) .animate({width:'30%'},250) .animate({left:'60%',width:'0%'},250) .animate({width:'30%'},250).animate({top:'70%',height:'0%'},250) .animate({height:'20%'},250) 
.animate({width:'0%'},250) .animate({left:'45%',width:'20%'},250) .animate({height:'0%'},250)
.animate({top:'50%',height:'20%'},250,function (){




speedbbb.fadeOut();



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

//media.play();



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
speedt.animate({
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
speedl.animate({
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
speedb.animate({
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
speedr.animate({
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





