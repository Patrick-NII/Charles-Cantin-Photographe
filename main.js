// Ajout d'un événement sur le bouton de menu pour afficher ou cacher le menu
const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');
let menuOpen = false;

menuButton.addEventListener('click', () => {
  if (!menuOpen) {
    menuButton.classList.add('open');
    navList.classList.add('show');
    menuOpen = true;
  } else {
    menuButton.classList.remove('open');
    navList.classList.remove('show');
    menuOpen = false;
  }
});

// Ajout d'un événement sur les images pour les agrandir au clic
const images = document.querySelectorAll('.gallery-image');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('enlarge');
  });
});

// Ajout d'un événement sur le formulaire de contact pour empêcher son envoi par défaut
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  // code pour traiter le formulaire
});

