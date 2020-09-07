function openNavbar() {
    var x = document.getElementById("topNav");
    var y = document.getElementById("hamburger");
    if (x.className === "nav-items") {
      x.className += " responsive";
    } else {
      x.className = "nav-items";
    }
    if (x.className === "nav-items responsive"){
      y.className = "cross";
    } else{ y.className = "hamburger" }
    console.log(y.className);
    console.log(x.className);
  }



  var mybutton = document.getElementById("scrollBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
  }
 
