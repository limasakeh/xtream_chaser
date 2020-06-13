
function SwitchToMobileView(){
    var nav = document.getElementById("navbar");
    if(nav.className === "header")
    {
      nav.className += " responsive";
    }
    else
    {
      nav.className = "header";
    }
  }
  
  $(window).resize(function(){
    var currHeight = $(window).height();
    var currWidth = $(window).width();
  
    console.log(currHeight,currWidth);
  
    if(currHeight > 799 || currWidth > 799)
    {
      var navButtons = $('.navbutton');
      var nav = document.getElementById("navbar");
      navButtons.addClass('to-be-hidden');
      nav.className = "header";
    }
  });