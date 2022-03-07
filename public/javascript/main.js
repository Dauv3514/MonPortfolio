// Animation pokemon

function cacher() {
  document.getElementById('animation-pokemon').style.visibility='hidden';
}
  window.setTimeout(cacher, 12000);


function apparaitre() { 

  document.getElementById('valentinpc').style.visibility='visible';
  document.getElementById('eclat').style.visibility='visible';

}

window.setTimeout(apparaitre, 12040);

// Animation Toggle Compétences

let boutonTech = document.getElementById('bouton-tech');
let boutonDesign = document.getElementById('bouton-design');

boutonDesign.addEventListener('click', toggleBouton);

boutonTech.addEventListener('click', toggleBouton);

function toggleBouton() {

    let changer = document.getElementById('changer');

    changer.classList.toggle('droite');

}



