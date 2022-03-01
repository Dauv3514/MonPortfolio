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

/*     document.getElementById('liste-tech').style.  visibility='hidden';

    document.getElementById('liste-design').style.visibility='visible'; */

}

// Animation Contact (simpson) 

function disparitionhomer() {
    
    document.getElementById('rondcontact').classList.add('disparitionhomer')

}
    setInterval(disparitionhomer, 2000);

function apparitionhomer2() {
    
    document.getElementById('rondcontact').classList.add('apparitionhomer2')
  
}
    setInterval(apparitionhomer2, 2010);

function disparitionhomer2() {
    
      document.getElementById('rondcontact').classList.add('disparitionhomer2')
    
  }
    setInterval(disparitionhomer2, 4000);

function apparitionmail() {
    
      document.getElementById('rondcontact').classList.add('apparitionmail')
    
}
    setInterval(apparitionmail, 4010);



