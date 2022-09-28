import { galleryItems } from './gallery-items.js'; 
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gal = document.querySelector('.gallery') 
 
const elements = galleryItems.map(imgData => { 
    return `<a class="gallery__item" href=${imgData.original}> 
      <img 
        class="gallery__image" 
        src=${imgData.preview} 
        data-source=${imgData.original} 
        alt=${imgData.description} 
      /> 
    </a>` 
}).join('') 
gal.insertAdjacentHTML('afterbegin', elements) 
 
var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 }); 
 
console.log(galleryItems);