// Validation du formulaire de connexion
document.getElementById("loginForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validation basique pour s'assurer que les champs ne sont pas vides
    if (!username || !password) {
        alert("Veuillez remplir tous les champs.");
        event.preventDefault(); // Empêche l'envoi du formulaire si les champs sont vides
    } else {
        // Tu peux ajouter des validations supplémentaires ici
        console.log("Formulaire valide. Envoi des données...");
    }
});


