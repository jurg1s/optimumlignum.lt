//----------navbar----------//

document.addEventListener("DOMContentLoaded", function(){
		
    window.addEventListener('scroll', function() {
       
        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
             document.getElementById('navbar_top').classList.remove('fixed-top');
             // remove padding top from body
            document.body.style.paddingTop = '0';
        } 
    });
}); 


//-----scroll-top button-----//


let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    mybutton.style.opacity = "1";
    mybutton.style.transform = "translateY(0px)";
    mybutton.style.transition = "0.3s";
  } else {
    mybutton.style.transform = "translateY(70px)";
    mybutton.style.opacity = "0";
   
    
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  mybutton.style.transition = "transform 0.3s;";
  
}


// hover//



$(document).ready( function() {
    // Get page URL by breaking down window.location
    var page = window.location.href.substr(window.location.href.lastIndexOf("#sushi") + 1);

    // Search through each link, compare href to current page
    $("a.btncstm").each( function(){
        if( $(this).attr("href") == page || $(this).attr("href") == "" )
        $(this).addClass("active");
    })
});