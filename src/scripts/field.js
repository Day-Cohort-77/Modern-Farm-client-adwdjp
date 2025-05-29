let fieldArray = [];

export const addPlants = (seed) => {
  let plants = null;

  if (Array.isArray(seed)) {
    plants = seed.find((item) => typeof item === "object");
  } else if (typeof seed === "object") {
    plants = seed;
  }
  if (plants) {
    fieldArray.push(seed);
  }
  return plants;
};

export const usePlants = () => {
  return structuredClone(fieldArray);
};
