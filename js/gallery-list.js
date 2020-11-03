import imagesArr from "./gallery-items.js";
function createGalleryImages(image) {
return image
    .map(({ preview, original, description }) => {
      let i = `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
      return i;
    })
    .join("");
}
const Markup = createGalleryImages(imagesArr);

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", Markup);


const lightbox = document.querySelector(`.js-lightbox`);
const lightboxImage = document.querySelector(`.lightbox__image`);
galleryContainer.addEventListener(`click`, onImageclick);
function onImageclick(event) {
    event.preventDefault();
    if(event.target.nodeName !== `IMG`) {
        return;
    }
    lightbox.classList.add(`is-open`);
    lightboxImage.src = event.target.dataset.source;
    lightboxImage.alt = event.target.alt;
    document.body.style.overflow = "hidden";
}

const closeModalBtn = document.querySelector(`[data-action="close-lightbox]`);
closeModalBtn.addEventListener(`click`)
function onCloseModal (event) {
    document.classList.remove(`is-open`);
}
