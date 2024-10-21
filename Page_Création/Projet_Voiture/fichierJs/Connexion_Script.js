// Validation du formulaire de connexion
function validerFormulaire() {
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const adresse = document.getElementById("adresse").value;
    const telephone = document.getElementById("telephone").value;
    const description = document.getElementById("description").value;

    if (nom && prenom && adresse && telephone && description) {
        alert("Formulaire validé avec succès !");
        // Ici, vous pouvez ajouter du code pour envoyer les données à un serveur
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}


