const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabet.length);
const FLOOR_NUMBER: number = 5;
const CEIL_NUMBER: number = 7;

export const aggregateIntoChunks = <T>(array: T[]) => {
  isArrayLengthInRange(array);
  const arrayWithChunks: T[][] = [];
  if (FLOOR_NUMBER <= array.length && array.length <= CEIL_NUMBER) {
    arrayWithChunks.push(array);
    return arrayWithChunks;
  }
  return pushElementsToFinalArray(array);
};

const isArrayLengthInRange = <T>(array: T[]) => {
  if (array.length < FLOOR_NUMBER) {
    throw new Error(
      "You must provide array with at least minimum required elements"
    );
  }
};

const getRandomIntInRange = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const pushElementsToFinalArray = <T>(array: T[]) => {
  const arrayWithChunks: T[][] = [];
  while (array.length > CEIL_NUMBER) {
    arrayWithChunks.push(
      array.splice(0, getRandomIntInRange(FLOOR_NUMBER, CEIL_NUMBER))
    );
  }
  if (array.length <= CEIL_NUMBER && array.length >= FLOOR_NUMBER) {
    arrayWithChunks.push(array.splice(0, array.length));
    console.log(
      `Length of last array element was between ${CEIL_NUMBER} and ${FLOOR_NUMBER}`
    );
    return arrayWithChunks;
  }
  if (array.length < FLOOR_NUMBER) {
    console.log(
      `Length of last array element was less than ${FLOOR_NUMBER}, array had ${array.length} element/elements`
    );
    arrayWithChunks.push(array.slice(0, array.length));
    const newArray: T[][] = [];
    for (let i = 1; i <= arrayWithChunks.length - 1; i++) {
      let lastChunk = arrayWithChunks[arrayWithChunks.length - i];
      let penultimateChunk = arrayWithChunks[arrayWithChunks.length - i - 1];
      let diffFloorAndLastChunkLength = FLOOR_NUMBER - lastChunk.length;
      if (lastChunk.length >= FLOOR_NUMBER) {
        newArray.push(lastChunk);
      }
      if (lastChunk.length < FLOOR_NUMBER) {
        newArray.push([
          ...penultimateChunk.splice(
            penultimateChunk.length - diffFloorAndLastChunkLength,
            penultimateChunk.length
          ),
          ...lastChunk,
        ]);
      }
    }
    if (
      arrayWithChunks[0].length <= CEIL_NUMBER &&
      arrayWithChunks[0].length >= FLOOR_NUMBER
    ) {
      newArray.push(arrayWithChunks[0]);
      return newArray.reverse();
    }
    throw new Error(
      `Parameteres ${FLOOR_NUMBER} and ${CEIL_NUMBER} are not good for given array`
    );
  }
  return arrayWithChunks;
};
