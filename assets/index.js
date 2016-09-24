var slideOutOpen = false;

function openNav() {
    slideOutOpen = !slideOutOpen;

    document.getElementById("mySidenav").style.width = slideOutOpen ? "250px" : 0;
    document.getElementById("main").style.marginLeft = slideOutOpen ? "250px" : 0;
}
