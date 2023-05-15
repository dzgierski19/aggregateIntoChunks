const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".split(
  ""
);
console.log(alphabet.length);
const FLOOR_NUMBER: number = 10;
const CEIL_NUMBER: number = 12;

const getRandomIntInRange = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isArrayLengthInRange = <T>(array: T[]) => {
  if (array.length < FLOOR_NUMBER) {
    throw new Error(
      "You must provide array with at least minimum required elements"
    );
  }
};

// const pushElementsToFinalArray = <T>(array: T[]) => {
//   const arrayWithChunks: T[][] = [];
//   while (array.length > CEIL_NUMBER) {
//     arrayWithChunks.push(
//       array.splice(0, getRandomIntInRange(FLOOR_NUMBER, CEIL_NUMBER))
//     );
//   }
//   if (array.length >= FLOOR_NUMBER) {
//     arrayWithChunks.push(array);
//     return arrayWithChunks;
//   }
//   pushElementsToFinalArray(alphabet);
// };

// // console.log(pushElementsToFinalArray(alphabet));

const pushElementsToFinalArray2 = <T>(array: T[]) => {
  const arrayWithChunks: T[][] = [];
  while (array.length > CEIL_NUMBER) {
    arrayWithChunks.push(
      array.splice(0, getRandomIntInRange(FLOOR_NUMBER, CEIL_NUMBER))
    );
  }
  if (array.length <= CEIL_NUMBER && array.length >= FLOOR_NUMBER) {
    arrayWithChunks.push(array.splice(0, array.length));
    console.log("between CEIL && FLOOR CHECK");
    return arrayWithChunks;
  }
  if (array.length < FLOOR_NUMBER) {
    const lastBadChunk = array;
    // const differenceBetFloorAndLastChunk =
    //   arrayWithChunks[arrayWithChunks.length - 1].length - FLOOR_NUMBER;
    const lastBadChunkDiff = FLOOR_NUMBER - lastBadChunk.length;
    const lastGoodChunk: T[] = arrayWithChunks[arrayWithChunks.length - 1];
    arrayWithChunks.push([
      ...lastGoodChunk.splice(
        lastGoodChunk.length - lastBadChunkDiff,
        lastGoodChunk.length
      ),
      ...lastBadChunk,
    ]);
    // for (let i = 1; i <= arrayWithChunks.length; i++) {
    //   if (arrayWithChunks[arrayWithChunks.length - i].length > FLOOR_NUMBER) {
    //     return arrayWithChunks;
    //   }
    // }
  }
  return arrayWithChunks;
};

const aggregateIntoChunks = <T>(array: T[]) => {
  isArrayLengthInRange(array);
  const arrayWithChunks: T[][] = [];
  if (FLOOR_NUMBER <= array.length && array.length <= CEIL_NUMBER) {
    arrayWithChunks.push(array);
    return arrayWithChunks;
  }
  return pushElementsToFinalArray2(array);
};

console.log(aggregateIntoChunks(alphabet));

// console.log(aggregateIntoChunks(alphabet));

// const chunks = aggregateIntoChunks(alphabet);

// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
