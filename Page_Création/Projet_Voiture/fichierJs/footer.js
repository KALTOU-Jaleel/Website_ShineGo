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
const elementsAvecTextes2 = {
    ".Instagram": "Instagram",
    ".Contact": "Contact",
    ".Facebook": "Facebook",
    ".Carrière": "Carrière",
    ".Réservez": "Réservez",
};

// Appel de la fonction avec l'objet contenant les sélecteurs et les textes
ajouterTexte(elementsAvecTextes2);

