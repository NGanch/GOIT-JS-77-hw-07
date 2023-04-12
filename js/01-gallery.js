import { galleryItems } from './gallery-items.js';

const container = document.querySelector('.gallery');

// =============================
function createImageCard(array) {
    const markup = array.map(({preview, original, description}) => {
    return `<li class="gallery__item">
   <a class = "" href ="${preview}">
   <img
   class= "gallery__image"
   href ="${original}"
   src="${preview}"
   data-source="${original}"
   alt="${description}"
 />
</a> </li>`
    }).join('');
    return markup;
  
}
container.insertAdjacentHTML('beforeend', createImageCard(galleryItems));

container.addEventListener('click', onClick);
function onClick(evt){
    evt.preventDefault();
    const galleryImg = evt.target.classList.contains('.gallery__image');
    
    if(!galleryImg){
     return;
    }
            //  // модальне вікно
 const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`);
            
    instance.show();
// модальне вікно
}
   
    
 
const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`
, {
	closable: false
})

instance.close()
// =============================

// const callGallery = createImageCard(galleryItems);
 
// const markup = galleryItems.map(({id, preview, original, description}) => 
//   `<li data-card-id = "${id}" class="gallery__item js-target">
//    <a class = "js-target" href ="${preview}">
//    <img
//    class="gallery__image js-target"
//    href ="${original}"
//    src="${preview}"
//    data-source="${original}"
//    alt="${description}"
//  />
// </a> </li>`
//     ).join('');
 
  
// container.insertAdjacentHTML('beforeend', markup);
// console.log(container)

// container.addEventListener('click', onClick);


//     function onClick(evt){
//         const galleryimg = evt.target.classList.contains('.js-target');
        
//         if(!galleryimg){
//          console.log('1')
//         }
//             // console.log(evt.target);
//             console.log('2')
        
    
//     }



//  // модальне вікно
// const instance = basicLightbox.create(`
// <div>
// <li class="gallery-item js-target">
// <a class = "gallery_image js-target" href ="${currentItem.preview}">
// <img
// class="gallery__image js-target"
// href ="${currentItem.original}"
// src="${currentItem.preview}"
// data-source="${currentItem.original}"
// alt="${currentItem.description}"
// />
// </a> </li>
// </div>
// `)

// instance.show()
// // модальне вікно

// }



