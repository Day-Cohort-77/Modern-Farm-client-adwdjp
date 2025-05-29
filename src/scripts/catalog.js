import { addPlants, usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
// Your existing harvestPlants function here...

export const Catalog = (harvestedFood) => {
    let htmlString = "";
    
    for (const food of harvestedFood) {
        htmlString += `<section class="plant">${food.type}</section>`;
    }
    
    const mainElement = document.querySelector("main");
    if (mainElement) {
        mainElement.innerHTML += htmlString;
    } else {
        console.error("Main element not found in the document.");
    }
}
const plants = usePlants();
const harvestedFood = harvestPlants(plants);
Catalog(harvestedFood);
