import { addPlants, usePlants } from "./field.js"
// define and export a harvestPlants function
export const harvestPlants = () => {
// the function harvestPlants must accept the plants 
// array as an argument.
// the function will return an array of seed objects
// iterate the array of growing plants. on each 
// plant object, get the value of the output property
const harvestedPlants = []
const plants = usePlants()
    for (const plant of plants) {
        if (plant.type === "Corn") {
            for (let i = 0; i < (plant.output / 2); i++) {
                harvestedPlants.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                harvestedPlants.push(plant)
            }
        }
    }

    return harvestedPlants
}
// add that many of the plant objects to the array 
// that the function returns.


// the array that the function returns should 
// have two identical objects added to it for each plant
// with the exception of the corn plant. half the 
// corn will be sold to cattle ranchers, so only
// half of the output will be added to the array.

