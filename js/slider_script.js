// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutSine:function(j,i,b,c,d){return -c/2*(Math.cos(Math.PI*i/d)-1)+b}});function ws_domino(n,j,l){$=jQuery;var i=$(this);var d=n.columns||5,m=n.rows||2,e=n.centerRow||2,h=n.centerColumn||2;var g=$("<div>").addClass("ws_effect ws_domino").css({position:"absolute",width:"100%",height:"100%",top:0,overflow:"hidden"}).appendTo(l.parent());var c=$("<div>").addClass("ws_zoom").appendTo(g);var k=$("<div>").addClass("ws_parts").appendTo(g);var f=l.find(".ws_list");var a;function b(s,p,q,o,r){if(n.support.transform&&n.support.transition){if(!p.transform){p.transform=""}if(p.left||p.top){p.transform+=" translate3d("+(p.left?p.left:0)+"px,"+(p.top?p.top:0)+"px,0px)"}if(q){p.transition=q+"ms all "+o+"ms cubic-bezier(0.445, 0.050, 0.550, 0.950)"}delete p.left;delete p.top;s.css(p);if(r){s.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",r)}}else{if(r){s.animate(p,q,"easeInOutSine",r)}else{s.css(p)}}}this.go=function(y,x){function z(){k.find("img").stop(1,1);k.empty();c.empty();a=0}z();if(n.fadeOut){f.fadeOut(n.duration)}var s=$(j.get(x));s={width:s.width(),height:s.height(),marginTop:parseFloat(s.css("marginTop")),marginLeft:parseFloat(s.css("marginLeft"))};var C=$(j.get(x)).clone().appendTo(c).css({position:"absolute",top:0,left:0}).css(s);b(C,{transform:"scale(1)"});var q=g.width();var p=g.height();var w=Math.floor(q/d);var v=Math.floor(p/m);var t=q-w*(d-1);var D=p-v*(m-1);function H(K,J){return Math.random()*(J-K+1)+K}var u=[];for(var B=0;B<m;B++){u[B]=[];for(var A=0;A<d;A++){var r=n.duration*(1-Math.abs((e*h-B*A)/(2*m*d)));var E=A<d-1?w:t;var o=B<m-1?v:D;u[B][A]=$("<div>").css({width:E,height:o,position:"absolute",top:B*v,left:A*w,overflow:"hidden"});var G=H(B-2,B+2);var F=H(A-2,A+2);u[B][A].appendTo(k);var I=$(j.get(y)).clone().appendTo(u[B][A]).css(s);b(I,{position:"absolute",top:-G*v,left:-F*w,opacity:0},r,0)}}setTimeout(function(){if(n.support.transform&&n.support.transition){b(C,{transform:"scale(1.6)"},n.duration,n.duration*0.2)}for(var K=0;K<m;K++){for(var J=0;J<d;J++){b(u[K][J].find("img"),{top:-K*v,left:-J*w,opacity:1},r,0,function(){a++;if(a==m*d){z();f.stop(1,1);i.trigger("effectEnd")}})}}},0)}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"domino",prev:"",next:"",duration:30*100,delay:48*100,width:1000,height:349,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:false,loop:false,bullets:0,caption:false,captionEffect:"parallax",controls:false,responsive:1,fullScreen:false,onBeforeStep:0,images:0});