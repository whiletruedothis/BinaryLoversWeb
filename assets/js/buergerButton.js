const BURGER_BUTTON = document.getElementById("burger-menu-icon");
const MENU_CSS = document.getElementById("menu").classList;
const MOBILE_BREAKPOINT = window.matchMedia("(max-width: 800px)");

let mobileMenuIsDisplayed = false;

function setEventListeners(){
    BURGER_BUTTON.addEventListener("click", theBuergerMenuButtonWasClicked);
    MOBILE_BREAKPOINT.addListener(removeMobileMenu);
}

//main function
setEventListeners();

function theBuergerMenuButtonWasClicked() {    
    if(!mobileMenuIsDisplayed){
        showMobileMenu();
        mobileMenuIsDisplayed = true;
    }else{
        hideMobileMenu();
        mobileMenuIsDisplayed = false;
    }
}

function showMobileMenu(){
    MENU_CSS.add("mobile-menu");
    MENU_CSS.remove("hide");
}

function hideMobileMenu(){
    MENU_CSS.add("hide");
    MENU_CSS.remove("mobile-menu");
}

function removeMobileMenu(){
    MENU_CSS.remove("mobile-menu");
    MENU_CSS.remove("hide");
    mobileMenuIsDisplayed = false;
}

