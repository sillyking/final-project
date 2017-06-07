
window.onscroll = function(){ 
  var t = document.documentElement.scrollTop || document.body.scrollTop; 
  var top_div = document.getElementById( "ty_go_top_btn" ); 
  var ty_nav = document.getElementById( "ty_layout_nav" );
   if( t >0 ) { 
    top_div.style.display = "block"; 
  } 
  else { 
    top_div.style.display = "none"; 
  } 
  if( t>=118 ) { 
    ty_nav.style.background= "white";
    $(".ty-nav-btn-content>a").css({"color":"#444"});
    $(".ty-nav-login-content a ").eq(0).css({"color":"#444"});
  } 
  else { 
    ty_nav.style.background = "none"; 
    $(".ty-nav-btn-content>a").css({"color":"#fff"});
    $(".ty-nav-login-content a ").eq(0).css({"color":"#fff"});
  }

  if(t>118){
  // $(".ty-profile").css({"top":68});
  $(".ty-profile-bg").css({"top":68});  
  $(".ty-profile-motto").css({"top":68});
  }
  else{
  $(".ty-profile").css({"top":-t});
  $(".ty-profile-bg").css({"top":t-50});  
  $(".ty-profile-motto").css({"top":t-50});
  }
} 
function goTop(){
  // window.scrollTo(0,0); 
    (function smoothscroll(){  
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;  
    if (currentScroll > 0) {  
         window.requestAnimationFrame(smoothscroll);  
         window.scrollTo (0,currentScroll - (currentScroll/10));  
    }  
})();  
}
$(".ty-go-top").on("click",goTop);