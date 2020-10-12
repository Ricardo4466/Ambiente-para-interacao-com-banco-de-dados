
$(document).ready(function (){


  window.onscroll = function (){ scrollFunction() };

  function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      document.getElementById("header").style.height = "85px";

        $("#login-header").hide();
    }
    else{
      document.getElementById("header").style.height = "95px";
      $("#login-header").fadeIn();
    }
  }


  $("#icon").click(function () {
    $("#login-header").fadeIn();
  });
});