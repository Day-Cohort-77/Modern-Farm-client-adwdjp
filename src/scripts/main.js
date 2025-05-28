import { createPlan } from "./plan.js";
console.log("Welcome to the main module");
//import and invoke createPlan() from plan.js module
const yearlyPlan = createPlan();

import { createCorn } from "./seeds/corn.js";
const cornSeed = createCorn();
console.log(cornSeed);