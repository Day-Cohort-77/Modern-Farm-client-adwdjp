import { createPlan } from "./plan.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlants, usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js"

const yearlyPlan = createPlan();

const cornSeed = createCorn();
const potatoSeed = createPotato();
const asparagusSeed = createAsparagus();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();



const plants = usePlants();
const harvestedFood = harvestPlants(plants);
Catalog(harvestedFood);


