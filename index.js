var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top = "-100px";
    } else{
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})
