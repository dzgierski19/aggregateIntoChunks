const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabet.length);
const FLOOR_NUMBER = 4;
const CEIL_NUMBER = 7;

const getRandomIntInRange = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isArrayLengthInRange = <T>(array: T[]) => {
  if (array.length < 4) {
    throw new Error("You must provide array with at least 4 elements");
  }
};

const isArrayElementInRange = <T>(array: T[]) => {
  if (array.length >= FLOOR_NUMBER && array.length <= CEIL_NUMBER) {
    const arrayWithChunks: T[][] = [];
    arrayWithChunks.push(array);
    return arrayWithChunks;
  }
};

const pushElementsToFinalArray = <T>(array: T[]) => {
  const arrayWithChunks: T[][] = [];
  while (arrayWithChunks.length !== array.length) {
    arrayWithChunks.push(
      array.splice(0, getRandomIntInRange(FLOOR_NUMBER, CEIL_NUMBER))
    );
  }
  if (
    array.flat(1).length >= FLOOR_NUMBER &&
    array.flat(1).length <= CEIL_NUMBER
  ) {
    arrayWithChunks.push(array.splice(0));
    return arrayWithChunks;
  }
  pushElementsToFinalArray(array);
};

const aggregateIntoChunks = <T>(array: T[]) => {
  isArrayLengthInRange(array);
  const arrayWithChunks: T[][] = [];
  if (FLOOR_NUMBER <= array.length && array.length <= CEIL_NUMBER) {
    arrayWithChunks.push(array);
    return arrayWithChunks;
  }
  return pushElementsToFinalArray(array);
};

console.log(aggregateIntoChunks(alphabet));

// const chunks = aggregateIntoChunks(alphabet);

// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
