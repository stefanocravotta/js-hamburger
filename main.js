

const hamburgerMenu = document.querySelector('.header-right > a');
const hamburgerMenuContent = document.querySelector('.hamburger-menu');
const exitItem = document.querySelector('.close');


hamburgerMenu.addEventListener('click', function(){
    hamburgerMenuContent.style.display ="block";
})

exitItem.addEventListener('click', function(){
    hamburgerMenuContent.style.display ="none";

})