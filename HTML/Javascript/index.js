// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "18px 10px";
    document.getElementById("logo").style.fontSize = "18px";
    document.getElementById("navbar").style.backgroundColor = "#EAE7DC";
    document.getElementById("navbar").style.boxShadow = "0px 2px 5px 0px rgba(0,0,0,0.75)";
    
  } else {
    document.getElementById("navbar").style.boxShadow ="none";
    document.getElementById("navbar").style.backgroundColor = "#f1f1f100";
    document.getElementById("navbar").style.padding = "35px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}