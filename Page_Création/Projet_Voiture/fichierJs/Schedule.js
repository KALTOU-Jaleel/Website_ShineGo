document.querySelectorAll("td.available").forEach(cell => {
    cell.addEventListener("mouseenter", () => {
        cell.classList.add("hovered");
    });
    cell.addEventListener("mouseleave", () => {
        cell.classList.remove("hovered");
    });
});