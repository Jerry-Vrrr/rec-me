const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const truncateString = (str) => {
  return (str.length > 25) ? str.slice(0, 24) + "..." : str
}

export {getRandom, truncateString}