// Récupère les éléments de la page
const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('popup');

// Ouvre la fenêtre pop-up
openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

// Ferme la fenêtre pop-up
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Ferme la fenêtre pop-up si on clique en dehors du contenu
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

