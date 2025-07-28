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

const changeImage = () => {
    const imageElement = document.querySelector("#imgElement");
    const allImagesDivs = document.querySelectorAll("img");
    id = 0;
    setInterval(() => {
        for(let i = 0; i < images.length; i++) {
            allImagesDivs[0].src = images[0+i];
            allImagesDivs[1].src = images[1+i];
            allImagesDivs[2].src = images[2+i];
            allImagesDivs[3].src = images[3+i];
            allImagesDivs[4].src = images[4+i];
        }
    }, 2000)
}

changeImage();