

const hamburgerMenu = document.querySelector('.header-right > a');
const hamburgerMenuContent = document.querySelector('.hamburger-menu');
const exitItem = document.querySelector('.close');


hamburgerMenu.addEventListener('click', function(){
    hamburgerMenuContent.style.display ="block";
})

exitItem.addEventListener('click', function(){
    hamburgerMenuContent.style.display ="none";

})

const biglietto = document.getElementById('biglietto');
const btnGenera = document.getElementById('genera');
const btnAnnulla = document.getElementById('annulla');
const overlay = document.getElementById('overlay');
console.log(overlay);

btnGenera.addEventListener('click', function(){
    biglietto.classList.remove('d-none')
    overlay.classList.remove('bgc-hide')
    const indirizzo = document.getElementById('indirizzo').value;
    const modalita = document.getElementById('modalita').value;
    const anni = document.getElementById('anni').value;

    document.getElementById('scelta-indirizzo').innerHTML = indirizzo;
    document.getElementById('scelta-modalita').innerHTML = modalita;
    document.getElementById('scelta-eta').innerHTML = anni;

})

btnAnnulla.addEventListener('click', function(){
    biglietto.classList.add('d-none')
    overlay.classList.add('bgc-hide')
    indirizzo = document.getElementById('indirizzo').value ="";
    modalita = document.getElementById('modalita').value ="";
    anni = document.getElementById('anni').value="";
})

