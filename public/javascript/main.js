

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


let boutontech = document.getElementById('boutontech');
let boutondesign = document.getElementById('boutondesign');
let listetech = document.getElementById('listetech');
let listedesign = document.getElementById('listedesign');

function toggle() {

  boutondesign.addEventListener('click', function(toggle) {

    listetech.style.visibility='hidden';
    listedesign.style.visibility='visible';
    console.log(toggle);

  });

}
