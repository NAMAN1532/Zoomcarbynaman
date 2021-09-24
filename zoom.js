window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 340 || document.documentElement.scrollTop > 340)
   {
    document.getElementById("hiding").style.display = "flex";
    document.getElementById("hiding").style.position = "relative";
    document.getElementById("hid1").style.position = "fixed";
    document.getElementById("hid1").style.zIndex = "999";
    document.getElementById("hid1").style.width = "100%";
    document.getElementById("hid1").style.top = "0";

    
  } else {
    document.getElementById("hiding").style.display = "none";
    
  }
}
window.onscroll = function() {scrollFunction()};

