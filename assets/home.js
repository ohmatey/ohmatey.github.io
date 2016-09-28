var homeCarousel = new Carousel();

homeCarousel.init();

(function(){
    function resizeHero(){
        console.log("asd")
        var $hero = document.getElementById('intro-inner');
        var $mask = document.getElementById('mask');
        var maskH = window.getComputedStyle($mask, null).getPropertyValue('height')
        
        if(maskH === 0){
            maskH = "100%";
        }

        $hero.style.padding = maskH + " 0 0";
    }
    resizeHero();


    window.addEventListener('resize', resizeHero, false);
})();
