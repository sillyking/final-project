function Feed(e){
    for(var i=0;i<=$(".ty-about-share-title a").length;i++){
    $(".ty-about-share-content .ty-about-share-content-detail").eq(i).css({"display":"none"});
    $(".ty-about-share-content .ty-about-share-content-detail").eq(i).removeClass("ty-active");
    if(i==$(this).index()){
        $(".ty-about-share-content .ty-about-share-content-detail").eq(i).css({"display":"block"});
        $(".ty-about-share-content .ty-about-share-content-detail").eq(i).addClass("ty-active");
        }
    }
}
$(".ty-about-share-title a").on("click",Feed);

