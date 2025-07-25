const dropdown1 = document.querySelector("#dropdown1");
document.querySelector("#dropdown1li").addEventListener("mouseover", (e) => {
    dropdown1.classList.toggle("visible");
})