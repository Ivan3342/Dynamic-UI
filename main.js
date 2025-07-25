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