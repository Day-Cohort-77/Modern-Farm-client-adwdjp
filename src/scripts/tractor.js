import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlants } from "./field.js";

export const plantSeeds = (yearlyPlan) => {
    for (const row of yearlyPlan) {
        for (const plant of row) {
            let seed;
            switch (plant) {
                case "Corn":
                    seed = createCorn();
                    break;
                case "Potato":
                    seed = createPotato();
                    break;
                case "Asparagus":
                    seed = createAsparagus();
                    break;
                case "Soybean":
                    seed = createSoybean();
                    break;
                case "Sunflower":
                    seed = createSunflower();
                    break;
                case "Wheat":
                    seed = createWheat();
                    break;
            }
            addPlants(seed);
        }
    }
};
