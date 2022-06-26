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
  imageContainer.innerHTML = `<img class="w-full" src=${image.imgSrc} alt=${image.imgTitle} />
  <span class="absolute left-10 bottom-8 text-white/80" >${image.imgTitle}</span>`
  docFrag.append(imageContainer)
})

gallery.append(docFrag);