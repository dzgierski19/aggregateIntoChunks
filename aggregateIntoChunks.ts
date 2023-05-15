const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefg".split("");
console.log(alphabet.length);
const FLOOR_NUMBER = 2;
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

const pushElementsToFinalArray = <T>(array: T[]) => {
  const arrayWithChunks: T[][] = [];
  while (array.length > CEIL_NUMBER) {
    arrayWithChunks.push(
      array.splice(0, getRandomIntInRange(FLOOR_NUMBER, CEIL_NUMBER))
    );
  }
  if (array.length >= FLOOR_NUMBER) {
    arrayWithChunks.push(array);
    return arrayWithChunks;
  }
  pushElementsToFinalArray(alphabet);
  // if (arrayWithChunks[arrayWithChunks.length - 1].length < FLOOR_NUMBER) {
  //   pushElementsToFinalArray(alphabet);
  // }
  // return arrayWithChunks;

  // if (array.length < FLOOR_NUMBER || array.length > CEIL_NUMBER) {
  //   pushElementsToFinalArray(array);
  // }
  // arrayWithChunks.push(array.splice(0));
  // pushElementsToFinalArray(array);
};

// console.log(pushElementsToFinalArray(alphabet));

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
