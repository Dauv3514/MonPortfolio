function cacher() {
  document.getElementById('vuejs').style.visibility='hidden';
  document.getElementById('css').style.visibility='hidden';
  document.getElementById('javascript').style.visibility='hidden';
  document.getElementById('html').style.visibility='hidden';
  document.getElementById('eclat').style.visibility='hidden';
  document.getElementById('pokeball').style.visibility='hidden';
  document.getElementById('valentin').style.visibility='hidden';
  document.getElementById('rotate').style.visibility='hidden';
  document.getElementById('opacity').style.visibility='hidden';
  document.getElementById('position').style.visibility='hidden';
}
  window.setTimeout(cacher, 12000);


function apparaitre() { 

  document.getElementById('valentinpc').style.visibility='visible';
  document.getElementById('eclat').style.visibility='visible';

}

window.setTimeout(apparaitre, 12040);









let boutonTech = document.getElementById('bouton-tech');
let boutonDesign = document.getElementById('bouton-design');
let listeTech = document.getElementById('liste-tech');
let listeDesign = document.getElementById('liste-design');




  boutonDesign.addEventListener('click', toggleBouton);

  boutonTech.addEventListener('click', toggleBouton);

  function toggleBouton() {

    let changer = document.getElementById('changer');

    changer.classList.toggle('droite');

  }



