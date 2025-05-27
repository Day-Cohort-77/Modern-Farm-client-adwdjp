//this is for corn
// define and export a function called createCorn
export const createCorn = () => {
  // create an array with two identical objects
  const corn = [
    {
      name: 'Corn',
      type: 'vegetable',
      color: 'yellow',
      price: 1.5,
    },
    {
      name: 'Corn',
      type: 'vegetable',
      color: 'yellow',
      price: 1.5,
    },
  ];
  
  // return the array
  return corn;
}

// the createCorn function will return an array 
// with two identical objeects in it with the same keys and 
// values.
