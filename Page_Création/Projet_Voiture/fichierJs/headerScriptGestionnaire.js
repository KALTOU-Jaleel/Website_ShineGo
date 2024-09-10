const listeHeader = ["Services","Connexion", "About us", "Contact" ];

document.addEventListener('DOMContentLoaded', function() {
    

    
    const motNettoyage = document.querySelector(".Link_Start_Nettoyage");
    const pNettoyage = document.createElement('p');
    pNettoyage.textContent = "Services";
    motNettoyage.appendChild(pNettoyage);

    const motConnexion = document.querySelector(".Link_Start_Connexion");
    const pConnexion = document.createElement('p');
    pConnexion.textContent = "Connexion";
    motConnexion.appendChild(pConnexion);

    const motAboutUs = document.querySelector(".Link_Start_aboutUs");
    const pAboutUs = document.createElement('p');
    pAboutUs.textContent = "About us";
    motAboutUs.appendChild(pAboutUs);

const motContact = document.querySelector(".Link_Start_Contact");


/*  const LogoApplication = document.querySelector(".imageLogoApplication");
    const ImageLogo = document.createElement('img');
    ImageLogo.src = "../Images/Logo de l'application.jpg";
    ImageLogo.className = "image_redimensionnee_logo";
    LogoApplication.appendChild(ImageLogo);
*/

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

window.addEventListener('scroll', function() {
    const header = document.querySelector('.Menu_Déroulant');
    const scrollY = window.scrollY; // Récupérer la position de défilement verticale

    const grossePartieduBas = document.querySelector('.grossePartieduBas');

    // Définir les hauteurs min et max
    const minHeight = window.innerHeight*0.13; // Hauteur minimale du header
    const maxHeight = window.innerHeight*0.75; // Hauteur maximale du header

    // Calculer la nouvelle hauteur en fonction du défilement
    const newHeight = Math.max(minHeight, maxHeight - scrollY);

    // Calculer le niveau de transparence du dégradé
    const maxOpacity = 0.45; // Opacité maximale du dégradé
    const opacity = Math.min(maxOpacity, scrollY / 500); // Ajuste le facteur d'opacité selon le défilement

    // Appliquer la nouvelle hauteur et le fond avec le dégradé
    header.style.height = (newHeight-40) + 'px';
    
    header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url('../Images/Voiture_nettoyage.jpg')`;

    grossePartieduBas.style.marginTop = newHeight + 'px';

    // Gérer la classe pour le dégradé basé sur la position de défilement
    if (scrollY > 50) { 
        header.classList.add('header-background-scrolled');
    } else {
        header.classList.remove('header-background-scrolled');
    }
});

});



