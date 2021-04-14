const examleGallryArr = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryContainer = document.querySelector("ul.js-gallery");
const lightBoxItem = document.querySelector("div.lightbox");
const lightBoxImage = document.querySelector("img.lightbox__image");
const closeBtn = document.querySelector("button[data-action='close-lightbox']");

let galleryElements = [];

const newElentGallery = (original = "#", preview = "#", description = "#") => {
  const newElemLi = document.createElement("li");
  newElemLi.classList.add("gallery__item");

  const newElemA = document.createElement("a");
  newElemA.classList.add("gallery__link");
  newElemA.href = "#";

  const newElemImg = document.createElement("img");
  newElemImg.classList.add("gallery__image");
  newElemImg.src = preview;
  newElemImg.dataset.source = original;
  newElemImg.alt = description;

  newElemA.appendChild(newElemImg);
  newElemLi.appendChild(newElemA);

  galleryElements.push(newElemLi);
};

const addNewElements = (arr) => {
  arr.forEach((elem) => {
    newElentGallery(elem.original, elem.preview, elem.description);
    galleryContainer.append(...galleryElements);
  });
};

addNewElements(examleGallryArr);

const modalWindowData = (srcData = "", altData = "") => {
  lightBoxItem.classList.toggle("is-open");
  lightBoxImage.src = srcData;
  lightBoxImage.alt = altData;
};

const openModalWindow = (event) => {
  if (event.target.nodeName === "IMG") {
    modalWindowData(event.target.dataset.source, event.target.alt);
    lightBoxItem.addEventListener("click", closeModalWindow);
    galleryContainer.addEventListener("keyup", keyCloseWindow);
  }
};

const closeModalWindow = (event) => {
  if (
    event.target.nodeName === "BUTTON" ||
    event.target.classList.value === "lightbox__overlay"
  ) {
    modalWindowData();
    lightBoxItem.removeEventListener("click", closeModalWindow);
    galleryContainer.removeEventListener("keyup", keyCloseWindow);
  }
};

const keyCloseWindow = (event) => {
  if (event.key === "Escape") {
    modalWindowData();
  }
};

galleryContainer.addEventListener("click", openModalWindow);
