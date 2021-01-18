
/* When the user scrolls down*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  breadcrumbsHide()
}



// Hide breadcrumbs
function breadcrumbsHide() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-nav").style.top = "0";
  } else {
    document.getElementById("main-nav").style.top = "-64px";
  }
  prevScrollpos = currentScrollPos;
}
