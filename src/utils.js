const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export {getRandom}