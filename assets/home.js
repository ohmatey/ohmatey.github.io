var homeCarousel = new Carousel();

homeCarousel.init();

(function(){
    function resizeHero(){
        var $hero = document.getElementById('intro-inner');
        var $mask = document.getElementById('mask');
        var maskH = window.getComputedStyle($mask, null).getPropertyValue('height')

        if(maskH === 0){
            maskH = "100%";
        }

        $hero.style.padding = maskH + " 0 0";
    }
    resizeHero();

    setTimeout(function(){
        resizeHero();
    }, 100);


    window.addEventListener('resize', resizeHero, false);
})();
