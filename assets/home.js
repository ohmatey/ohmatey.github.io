var homeCarousel = new Carousel();

homeCarousel.init();

(function(){
    (window.onresize = function(){
        var $hero = document.getElementById('intro-inner');
        var $mask = document.getElementById('mask');
        var maskH = window.getComputedStyle($mask, null).getPropertyValue('height')
        $hero.style.padding = maskH + " 0 0";
    })();
})();
