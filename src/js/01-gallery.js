// Add imports above this line


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galeria = document.querySelector(".gallery");


const imgs =(()=>{
    galleryItems.forEach((x)=>{
        
        const li = document.createElement("li");
        galeria.appendChild(li);
        li.classList.toggle("gallery__item");

        const a = document.createElement("a"); 
        a.href=x.original;
        li.appendChild(a);   
        a.classList.add("gallery__link");
       
        const img = document.createElement("img");
        img.src= x.preview;      
        img.alt= x.description;
        img.classList.add("gallery__image");
        a.appendChild(img);

    })
})

imgs();
console.log(galeria); 
console.log("entro galeria ");


/* galeria.innerHTML = imgs();
 */
const lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay : 250,
    
})
document.addEventListener("keydown", event => {
    if(event.code == "Escape"){     
      lightbox.close();
    }

});