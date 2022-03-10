// Animation pokemon

function cacher() {
  document.getElementById('animation-pokemon').style.display='none';
}
  window.setTimeout(cacher, 12000);


function apparaitre() { 

  document.getElementById('animation2').style.visibility='visible';
  /* document.getElementById('eclat').style.visibility='visible'; */

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

// Menu Hamburger

let ouvertureMenu = document.getElementById('ouvrir');
let fermetureMenu = document.getElementById('ferme');
let liensMenu = document.getElementById('liens');

ouvertureMenu.addEventListener('click', show);
fermetureMenu.addEventListener('click', close);
liensMenu.addEventListener('click', close);

function show() {
  
  liensMenu.style.display = 'flex';
  liensMenu.style.top = '0';

}

function close() {

  liensMenu.style.top = '-100%';

}

