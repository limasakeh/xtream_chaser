
function SwitchToMobileView(){
    var nav = document.getElementById("navbar");
    var navButtons = $('.navbutton');
  
  
    if(navButtons.className === "a.navbutton.to-be-hidden")
    {
      navButtons.removeClass('to-be-hidden');
      navButtons.addClass('mobile-view');
      
      console.log(navButtons);
    }
    else
    {
        console.log("Else");
       
      navButtons.addClass('to-be-hidden');
      navButtons.removeClass('mobile-view');
      console.log(navButtons);
    }
  
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