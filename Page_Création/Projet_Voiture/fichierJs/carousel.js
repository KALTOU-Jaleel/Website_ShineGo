const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active'); // Retirer la classe active de l'image actuelle
    currentIndex = (currentIndex + 1) % images.length; // Passer à l'image suivante
    images[currentIndex].classList.add('active'); // Ajouter la classe active à la nouvelle image
}

// Initialisation : définir la première image comme active
images[currentIndex].classList.add('active');

// Changer l'image toutes les 4 secondes
setInterval(showNextImage, 4000);
