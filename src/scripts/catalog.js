export const Catalog = (harvestedFood) => {
    let htmlString = "";
    
    for (const food of harvestedFood) {
        htmlString += `<section class="plant">${food.type}</section>`;
    }
    
    const mainElement = document.querySelector(".container");
    if (mainElement) {
        mainElement.innerHTML += htmlString;
    } else {
        console.error("Container element not found in the document.");
    }
};
