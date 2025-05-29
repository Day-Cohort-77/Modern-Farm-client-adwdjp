let fieldArray = [];

export const addPlants = (seed) => {
  if (Array.isArray(seed)) {
    fieldArray = fieldArray.concat(seed);
  } else {
    fieldArray.push(seed);
  }
};

export const usePlants = () => {
  return structuredClone(fieldArray);
};
