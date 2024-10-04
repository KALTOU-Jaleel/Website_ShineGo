document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reservationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Réservation soumise avec succès !");
    });
});

