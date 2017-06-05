// $.getJSON("explore.json",function(data){
//         headData = data.header;
//         var headHtml = $.templates("#ty_dream_card_template").render(headData);
//         $(".ty-explore-feed-container").append(headHtml);
// })
function Feed(e){
    for(var i=0;i<$(".ty-explore-feed .ty-explore-feed-container .container").length;i++){
    $(".ty-explore-feed-nav ul li a").eq(i).css({"border-bottom-color":"#fff"});
    $(".ty-explore-feed .ty-explore-feed-container .container").eq(i).css({"display":"none"});
    if(i==$(this).index()){
        $(".ty-explore-feed-nav ul li a").eq(i).css({"border-bottom-color":"#00B4FF"});
        $(".ty-explore-feed .ty-explore-feed-container .container").eq(i).css({"display":"block"});
        }
    }
}
$(".ty-explore-feed-nav>ul>li").on("click",Feed);
