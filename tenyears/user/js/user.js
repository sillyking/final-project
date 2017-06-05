window.onscroll = function(){ 
  var t =   document.documentElement.scrollTop || document.body.scrollTop; 
  var top_div = document.getElementById( "ty_go_top_btn" ); 
  var ty_nav = document.getElementById( "ty_layout_nav" ); 
  if( t >0 ) { 
    top_div.style.display = "block"; 
  } 
  else { 
    top_div.style.display = "none"; 
  } 
  if( t>=10 ) { 
    ty_nav.style.background= "white"; 
  } 
  else { 
    ty_nav.style.background = "none"; 
  } 
} 