

const hamburgerMenu = document.querySelector('.header-right > a');
console.log(hamburgerMenu);
const hamburgerMenuContent = document.querySelector('.hamburger-menu');
console.log(hamburgerMenuContent);
const exitItem = document.querySelector('.close');
console.log(exitItem);


hamburgerMenu.addEventListener('click', function(){
    hamburgerMenuContent.style.display ="block";
})

exitItem.addEventListener('click', function(){
    hamburgerMenuContent.style.display ="none";

})