var homeCarousel = new Carousel();

homeCarousel.init();

(function(){
    function resizeHero(){
        var $hero = document.getElementById('intro-inner');
        var $mask = document.getElementById('mask');
        var maskH = window.getComputedStyle($mask, null).getPropertyValue('height')
        $hero.style.padding = maskH + " 0 0";
    }


    document.addEventListener("DOMContentLoaded", function() {
        (window.onresize = resizeHero())
    });
})();
