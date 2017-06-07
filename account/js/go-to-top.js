window.onscroll = function(){ 
  var t =   document.documentElement.scrollTop || document.body.scrollTop; 
  var top_div = document.getElementById( "ty_go_top_btn" ); 
  if( t >0 ) { 
    top_div.style.display = "block"; 
  } 
  else { 
    top_div.style.display = "none"; 
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