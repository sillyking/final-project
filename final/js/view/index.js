$(document).ready(function(){
	//注册按钮变色
  $("#ty_fast_link_btn").mouseover(function(){
    $("#ty_fast_link_btn").css("background-color","#00B4FF");
  });
  $("#ty_fast_link_btn").mouseout(function(){
    $("#ty_fast_link_btn").css("background-color","rgba(0,0,0,0)");
  });
  //切换到注册界面
  $("#ty_fast_link_btn").click(function(){
  	var $this = $(this),
    action = $this.attr('data-action');
  	$("#ty_sign_in_form").slideToggle();
    $("#ty_register_form").slideToggle();
    if(action === 'register')
    {
    	$("#ty_fast_link_btn").attr("data-action","signIn");
    	$("#ty_fast_link_btn").text("登录");
    }
    else if(action === 'signIn')
    {
    	$("#ty_fast_link_btn").attr("data-action","register");
    	$("#ty_fast_link_btn").text("注册");
    }
  
  });
  $(showformChange)
  $(showformTooltip)
  $(showsignChange)
});
//点击输入框提示文字消失，底色变白,并且判断格式
function showformChange(){
	var isOut,
	  pwdOut,
    sisOut,
    spwdOut,
	$this = $(this);
    $("#ty_user_name").click(function(){
  	// var $this = $(this),
  	// value = $this.attr('placeholder');
  	isOut = false;
  	$(this).css("background-color","rgba(255,255,255,1)");
  	$(this).css("color","#000");
  	$(this).attr("placeholder","");
  });
  $("#ty_user_name").mouseout(function(){
  	isOut = true;
  });
  $(this).click(function(){
  	var val = $("#ty_user_name").val();
  	var regmail = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/; 
    var regphone = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
  	if(isOut === true)
  	{
  		$("#ty_user_name").css("background-color","rgba(255,255,255,.3)");
        $("#ty_user_name").css("color","#fff");
        $("#ty_user_name").attr("placeholder","邮箱或手机号");
        if(val === '')
        {
        	$(".ty-input-tool-tip.mail").css("display","block");
        	$(".ty-input-tip-mail-error").css("display","none");
    	    $(".ty-input-tip-mail-empty").css("display","block");
        }
        else if(!regmail.test(val) && !regphone.test(val))
        {
        	$(".ty-input-tool-tip.mail").css("display","block");
        	$(".ty-input-tip-mail-empty").css("display","none");
        	$(".ty-input-tip-mail-error").css("display","block");
        }
  	}
  });
  $("#ty_password").click(function(){
  	var $this = $(this),
  	value = $this.attr('placeholder');
  	pwdOut = false;
  	$(this).css("background-color","rgba(255,255,255,1)");
  	$(this).css("color","#000");
  	$(this).attr("placeholder","");
  });
  $("#ty_password").mouseout(function(){
  	pwdOut = true;
  });
  $(this).click(function(){
  	var val = $("#ty_password").val();
  	if(pwdOut === true)
  	{
  		$("#ty_password").css("background-color","rgba(255,255,255,.3)");
        $("#ty_password").css("color","#fff");
        $("#ty_password").attr("placeholder","密码");
        if(val === '')
        {
        	$(".ty-input-tool-tip.pwd").css("display","block");
        	$(".ty-input-tip-pwd-short").css("display","none");
        	$(".ty-input-tip-pwd-long").css("display","none");
        	$(".ty-input-tip-pwd-empty").css("display","block");
        }
        else if(val.length < 6)
        {
        	$(".ty-input-tool-tip.pwd").css("display","block");
        	$(".ty-input-tip-pwd-long").css("display","none");
        	$(".ty-input-tip-pwd-empty").css("display","none");
        	$(".ty-input-tip-pwd-short").css("display","block");
        }
        else if(val.length >16)
        {
        	$(".ty-input-tool-tip.pwd").css("display","block");
        	$(".ty-input-tip-pwd-short").css("display","none");
        	$(".ty-input-tip-pwd-empty").css("display","none");
        	$(".ty-input-tip-pwd-long").css("display","block");
        }
  	}
  });
  $("#ty_register_name").click(function(){
  	var $this = $(this),
  	sisOut = false;
  	value = $this.attr('placeholder');
    if(sisOut === false)
    {
      $(this).css("background-color","rgba(255,255,255,1)");
    $(this).css("color","#000");
    $(this).attr("placeholder","");
    }
  });
   $("#ty_register_name").mouseout(function(){
  	sisOut = true;
  });
  $(this).click(function(){
    if(sisOut === true)
    {
      $("#ty_register_name").css("background-color","rgba(255,255,255,.3)");
        $("#ty_register_name").css("color","#fff");
        $("#ty_register_name").attr("placeholder","邮箱");
    }
  });
}
