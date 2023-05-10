// write your code here

document.addEventListener("DOMContentLoaded", () => {
    fetchRamens()
});

function fetchRamens() {
fetch("http://localhost:3000/ramens")
    .then((r) => r.json())
    .then((data) => {
    data.forEach((ramen) => {
        populateImgDiv(ramen);
    });
    displayRamen(data[0]);
    });
}

function populateImgDiv(ramen) {
const imgDiv = document.querySelector("#ramen-menu");
const img = document.createElement("img");
img.src = ramen.image;
img.addEventListener("click", () => displayRamen(ramen));
imgDiv.appendChild(img);
}

function displayRamen(ramen) {
const displayDiv = document.querySelector("#ramen-detail");
Object.assign(displayDiv.querySelector(".detail-image"), {
    src: ramen.image,
    alt: ramen.name,
});
displayDiv.querySelector(".name").textContent = ramen.name;
displayDiv.querySelector(".restaurant").textContent = ramen.restaurant;
document.querySelector("#rating-display").textContent = ramen.rating;
document.querySelector("#comment-display").textContent = ramen.comment;
}
const ramenForm = document.querySelector("form#new-ramen");
ramenForm.addEventListener("submit", (e) => {
e.preventDefault();
const newRamen = Array.from(
    ramenForm.querySelectorAll("[id|=new]"),
    (element) => {
    return element.value;
    }
);
let ramen = {
    name: newRamen[0],
    restaurant: newRamen[1],
    image: newRamen[2],
    rating: newRamen[3],
    comment: newRamen[4],
};
populateImgDiv(ramen);
});
