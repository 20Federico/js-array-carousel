
const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const imgTextContainer = document.querySelector('.img_text_container');
const imgPreviewContainer = document.querySelector('.img_preview_container');

let currentNumber = 0;

// per ogni elemento item, crea un elemento html
for (let i = 0; i < items.length; i++) {
  const currentItem = items[i];
  const currentTitle = title[i];
  const currentText = text[i];

  let classeDaUsare1 = '';
  let classeDaUsare2 = '';

  // aggiungi la classe active al primo elemento della lista
  if (i === currentNumber) {
    classeDaUsare1 = 'active';
    classeDaUsare2 = 'img_preview_active';
  }


  imgTextContainer.innerHTML += 
  `<div class="img_container ${classeDaUsare1}">
      <img src="${currentItem}" alt="img #${i + 1}">
      <div class="text_container text-end">
        <h2>${currentTitle}</h2>
        <p class="fs-4">
          ${currentText}
        </p>
      </div>
    </div>`;

  imgPreviewContainer.innerHTML += `<img class="${classeDaUsare2}" src="${currentItem}" alt="img #${i + 1}">`;
  
};


const arrowDown = document.querySelector('i.fa-arrow-alt-circle-down');
const arrowUp = document.querySelector('i.fa-arrow-alt-circle-up');

arrowDown.addEventListener('click', 
function () {

  const activeImg = imgTextContainer.querySelector('.img_container.active');
  const activeImgPreview = imgPreviewContainer.querySelector('img.img_preview_active');
  
  //rimuovi la lasse active all'elemento che ce l'ha
  activeImg.classList.remove('active');
  activeImgPreview.classList.remove('img_preview_active');

  //aumenta di uno il numero che definisce l'elemento
  currentNumber++;

  // se clicco la freccia giu, dopo aver raggiunto l'ultimo elemento della lista, ritorna al primo elemento della lista 
  if (currentNumber > (items.length - 1)) {
    currentNumber = 0;
  }

  const arrayImgCointainer = imgTextContainer.querySelectorAll(".img_container");
  const arrayImgPreview = imgPreviewContainer.querySelectorAll("img");
  const newActiveImageContainer = arrayImgCointainer[currentNumber];
  const newActiveImgPreview = arrayImgPreview[currentNumber];

  //aggiungi la claase active al nuovo elemento 
  newActiveImageContainer.classList.add("active");
  newActiveImgPreview.classList.add("img_preview_active");

});

arrowUp.addEventListener('click', 
function () {
  
  const activeImg = imgTextContainer.querySelector('.img_container.active');
  const activeImgPreview = imgPreviewContainer.querySelector('img.img_preview_active');
  activeImg.classList.remove('active');
  activeImgPreview.classList.remove('img_preview_active');

  currentNumber--;

  if (currentNumber < 0) {
    currentNumber = items.length - 1;
  }

  const arrayImgCointainer = imgTextContainer.querySelectorAll(".img_container");
  const arrayImgPreview = imgPreviewContainer.querySelectorAll("img");
  const newActiveImageContainer = arrayImgCointainer[currentNumber];
  const newActiveImgPreview = arrayImgPreview[currentNumber];

  newActiveImageContainer.classList.add("active");
  newActiveImgPreview.classList.add("img_preview_active");

});
