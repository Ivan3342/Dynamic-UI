const dropdown1 = document.querySelector("#dropdown1");
document.querySelector("#dropdown1li").addEventListener("mouseover", (e) => {
    dropdown1.classList.remove("visible");
})

document.querySelector("#dropdown1li").addEventListener("mouseleave", (e) => {
    dropdown1.classList.add("visible");
})

dropdown1.addEventListener("mouseover", () => {
    dropdown1.classList.remove("visible");
})

dropdown1.addEventListener("mouseleave", () => {
    dropdown1.classList.add("visible");
})

const images = [
    "images/Gemini_Generated_Image_2eusia2eusia2eus.png",
    "images/Gemini_Generated_Image_5jge1h5jge1h5jge.png",
    "images/Gemini_Generated_Image_9dd50c9dd50c9dd5.png",
    "images/Gemini_Generated_Image_f4mak3f4mak3f4ma.png",
    "images/Gemini_Generated_Image_pm5g10pm5g10pm5g.png"
]

const ImageElement = () => {
    let id = 0;
    const imageElement = document.querySelector("#imageElement");

    const updateCarousel = (modifier) => {
        id += modifier;
        if (id < 0) id = images.length - 1;
        if (id >= images.length) id = 0;
        imageElement.src = images[id];
    }

    const carouselLoop = () => {
        setInterval(() => {
            if (id < images.length) {
                imageElement.src = images[id];
            }
            else {
                id = 0;
            }
        }, 5000);
    }

    return { updateCarousel, carouselLoop }
}

const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const carousel = ImageElement();

previousButton.addEventListener("click", () => {
    carousel.updateCarousel(-1);
});

nextButton.addEventListener("click", () => {
    carousel.updateCarousel(1);
});

carousel.carouselLoop();