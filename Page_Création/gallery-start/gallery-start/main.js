const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
let cheminAccès = [
    "C:/Users/khr jaleel/Downloads/Page_Web/Page_Création/gallery-start/gallery-start/images/pic1.jpg",
    "C:/Users/khr jaleel/Downloads/Page_Web/Page_Création/gallery-start/gallery-start/images/pic2.jpg",
    "C:/Users/khr jaleel/Downloads/Page_Web/Page_Création/gallery-start/gallery-start/images/pic3.jpg",
    "C:/Users/khr jaleel/Downloads/Page_Web/Page_Création/gallery-start/gallery-start/images/pic4.jpg",
    "C:/Users/khr jaleel/Downloads/Page_Web/Page_Création/gallery-start/gallery-start/images/pic5.jpg"
  ];
for(let i = 0; i < 5; i++)
    {


const newImage = document.createElement('img');
newImage.setAttribute('src', cheminAccès[i] );
newImage.setAttribute('alt', cheminAccès[i+1]);
thumbBar.appendChild(newImage);

newImage.onclick = function (event) {
    // Récupère l'attribut 'src' de l'image cliquée
    const srcClicked = event.target.getAttribute('src');
    
    // Définit la source de l'image principale affichée
    displayedImage.setAttribute('src', srcClicked);
};


}




/* Wiring up the Darken/Lighten button */
btn.onclick = function(event){
if (btn.getAttribute("class") === "dark")
    {
btn.setAttribute("class", "light");
btn.textContent = "Lighteen";
overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

}
else{
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
}
}