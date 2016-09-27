var slideOutOpen = false;

function openNav() {
    slideOutOpen = !slideOutOpen;

    document.getElementById("mySidenav").style.width = slideOutOpen ? "250px" : 0;
    document.getElementById("main").style.marginLeft = slideOutOpen ? "250px" : 0;
}

function Carousel(){

    function moveFirstSlideToEnd(el){
        var carousel = document.querySelectorAll(".carousel")[0];

        el.classList.remove('active');
        carousel.removeChild(el);
        carousel.insertAdjacentHTML('beforeend', el.outerHTML);
        animateFirstSlide();
    }

    function animateFirstSlide(){
        var firstSlide = document.querySelectorAll(".carousel li")[0];

        firstSlide.classList.add('active');

        window.setTimeout(function(){
            moveFirstSlideToEnd(firstSlide);
            animateFirstSlide();
        }, 5000);
    }

    function init(){
        animateFirstSlide();
    }

    this.init = init;
}
