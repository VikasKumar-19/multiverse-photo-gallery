const images = [
  {
    "imgTitle": "stars in milkiway",
    "imgSrc": "./assets/images/01.jpg"
  },
  {
    "imgTitle": "mountain sunshine",
    "imgSrc": "./assets/images/02.jpg"
  },
  {
    "imgTitle": "dessert morning",
    "imgSrc": "./assets/images/03.jpg"
  },
  {
    "imgTitle": "over the sea",
    "imgSrc": "./assets/images/04.jpg"
  },
  {
    "imgTitle": "mountain highway",
    "imgSrc": "./assets/images/05.jpg"
  },
  {
    "imgTitle": "sitting on clouds",
    "imgSrc": "./assets/images/06.jpg"
  },
  {
    "imgTitle": "modern structures",
    "imgSrc": "./assets/images/07.jpg"
  },
  {
    "imgTitle": "faith and humble",
    "imgSrc": "./assets/images/08.jpg"
  },
  {
    "imgTitle": "beautiful beaches",
    "imgSrc": "./assets/images/09.jpg"
  },
  {
    "imgTitle": "sand mountain",
    "imgSrc": "./assets/images/10.jpg"
  },
  {
    "imgTitle": "winter outfit",
    "imgSrc": "./assets/images/11.jpg"
  },
  {
    "imgTitle": "experience nature",
    "imgSrc": "./assets/images/12.jpg"
  }
]

const gallery = document.querySelector(".gallery");
const docFrag = document.createDocumentFragment();

images.forEach((image)=>{
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("w-full","relative");
  imageContainer.innerHTML = `<img class="w-full gallery__image" src=${image.imgSrc} alt=${image.imgTitle} />
  <span class="absolute left-10 bottom-8 text-white/80" >${image.imgTitle}</span>`
  docFrag.append(imageContainer)
})

gallery.append(docFrag);

const galleryImages = document.querySelectorAll(".gallery__image");
const modal = document.querySelector(".image__modal");
const modalContent = document.querySelector(".modal__content");
// const modalImage = document.querySelector(".modal__Image");

const handleOutsideClick = (e)=>{
  const target = e.target;
  console.log(modalContent.contains(target));
  if(modalContent.contains(target)){
    return
  }
  modal.classList.add("hidden");
  modalContent.querySelector(".modal__image").remove()
  modal.removeEventListener("mousedown ", handleOutsideClick)
}

galleryImages.forEach((image)=>{
  image.addEventListener("click", ()=>{
    modal.classList.remove("hidden");
    const modalImage = document.createElement("img");
    modalImage.src = image.src;
    modalImage.classList.add("modal__image", "w-full");
    modalContent.append(modalImage);
    modalContent.classList.remove("scale-0")
    modalContent.classList.add("scale-1")
    // console.log(modalContent);
    modal.addEventListener("click", handleOutsideClick)
  })
})
