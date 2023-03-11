// Add imports above this line
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description }) => {
        return`
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" loading="lazy" src="${preview}" alt="${description}"/>
        </a>
        `
    }).join('');
};

new SimpleLightbox('.gallery .gallery__link', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250
});