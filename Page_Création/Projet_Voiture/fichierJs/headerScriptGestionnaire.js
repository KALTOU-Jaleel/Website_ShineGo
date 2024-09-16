function ajouterTexte(elements) {
        for (const [selector, text] of Object.entries(elements)) {
            const element = document.querySelector(selector);
            if (element) {
                const p = document.createElement('p');
                p.textContent = text;
                element.appendChild(p);
            }
        }
    }
    
    // Utilisation de la fonction avec un dictionnaire
    const elementsAvecTextes = {
        ".Link_Start_Nettoyage": "Services",
        ".Link_Start_Connexion": "Connexion",
        ".Link_Start_aboutUs": "About us"
    };
    
    
    // Appel de la fonction avec l'objet contenant les sélecteurs et les textes
    ajouterTexte(elementsAvecTextes);
    

    window.addEventListener('scroll', handleScroll);
    const LangueChoisi = document.querySelector(".langueChoisi");
const pLangue = document.createElement("p");
pLangue.textContent = "Fr";
LangueChoisi.appendChild(pLangue);

LangueChoisi.addEventListener('click', function(event) {
    if (pLangue.textContent === "Fr") {
        pLangue.textContent = "Eng";
    } else if (pLangue.textContent === "Eng") {
        pLangue.textContent = "Fr";
    }
});


const motContact = document.querySelector(".Link_Start_Contact");


const Presentation = document.querySelector(".Link_Presentation");
const pPresentation = document.createElement('p');
pPresentation.textContent = "Votre confort, notre combat ...";
Presentation.appendChild(pPresentation);

// Fonction pour afficher/masquer le texte en fonction du scroll
function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Si le scroll est entre 20 % et 75 % de la hauteur de l'écran
    if (scrollPosition < windowHeight * 0.45) {
        pPresentation.style.display = 'block';  // Affiche le texte
    } else {
        pPresentation.style.display = 'none';   // Cache le texte
    }
}

// Écoute l'événement de scroll




window.addEventListener('scroll', function() {
    const header = document.querySelector('.Menu_Déroulant');
    const scrollY = window.scrollY; // Récupérer la position de défilement verticale

    const grossePartieduBas = document.querySelector('.grossePartieduBas');

    // Définir les hauteurs min et max
    const minHeight = window.innerHeight*0.16; // Hauteur minimale du header
    const maxHeight = window.innerHeight*0.75; // Hauteur maximale du header

    // Calculer la nouvelle hauteur en fonction du défilement
    const newHeight = Math.max(minHeight, maxHeight - scrollY);

    // Calculer le niveau de transparence du dégradé
    const maxOpacity = 0.45; // Opacité maximale du dégradé
    const opacity = Math.min(maxOpacity, scrollY / 500); // Ajuste le facteur d'opacité selon le défilement

    // Appliquer la nouvelle hauteur et le fond avec le dégradé
    header.style.height = newHeight+ 'px';
    
    header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url('../Images/Voiture_nettoyage.jpg')`;

    

    // Gérer la classe pour le dégradé basé sur la position de défilement
    if (newHeight <= 305) {
        grossePartieduBas.style.opacity = '1'; // Afficher
        grossePartieduBas.style.marginTop = newHeight + 'px'; // Garder une marge
    } else {
        grossePartieduBas.style.opacity = '0'; // Cacher
        grossePartieduBas.style.marginTop = '0'; // Réinitialiser la marge
    }

    // Gérer la classe pour le dégradé basé sur la position de défilement
    if (scrollY > 50) { 
        header.classList.add('header-background-scrolled');
    } else {
        header.classList.remove('header-background-scrolled');
    }
});





