export const harvestPlants = (plants) => {
    const harvestedPlants = [];
    for (const plant of plants) {
        const output = plant.type === "Corn" ? plant.output / 2 : plant.output;
        for (let i = 0; i < output; i++) {
            harvestedPlants.push({...plant});
        }
    }
    return harvestedPlants;
};
