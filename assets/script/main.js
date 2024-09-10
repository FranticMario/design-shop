import products from "./artikel.js";

const createArtikelBox = () => {
    const section = document.querySelector(".section__first");



    products.forEach(element => {
        section.innerHTML += 
        `
        <a  href ="${element.link}" class="section__box  ${(element.brand === "Fjallraven") ? "main-artikel" : ""}">
            <div class="img__container">
                <img src="./assets/img/${element.image}" alt="${element.name}" class="img__container">
            </div>
            <div class="artikel__beschreibung">
                <div class="artikel__text">
                    <h2 class="artikel__title">${element.name}</h2>
                    <p class="artikel__subtitle">${element.brand}</p>
                </div>
                <p class="artikel__price">${element.price}</p>
            </div>
        </a>
        `;
    });
}

createArtikelBox();