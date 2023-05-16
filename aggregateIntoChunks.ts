const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabet.length);
const FLOOR_NUMBER: number = 4;
const CEIL_NUMBER: number = 7;

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
    arrayWithChunks.push(array.slice(0, array.length));
    const newArray: T[][] = [];
    // const lastBadChunk = arrayWithChunks[arrayWithChunks.length - 1];
    // const differenceBetFloorAndLastChunk =
    //   arrayWithChunks[arrayWithChunks.length - 1].length - FLOOR_NUMBER;
    // const lastBadChunkDiff = FLOOR_NUMBER - lastBadChunk.length;
    // const lastGoodChunk: T[] = arrayWithChunks[arrayWithChunks.length - 1];
    // arrayWithChunks.push([
    //   ...lastGoodChunk.splice(
    //     lastGoodChunk.length - lastBadChunkDiff,
    //     lastGoodChunk.length
    //   ),
    //   ...lastBadChunk,
    // ]);
    for (let i = 1; i <= arrayWithChunks.length - 1; i++) {
      // let lastChunk = arrayWithChunks[arrayWithChunks.length - i];
      // let lastChunkDiff = FLOOR_NUMBER - lastChunk.length;
      if (arrayWithChunks[arrayWithChunks.length - i].length >= FLOOR_NUMBER) {
        newArray.push(arrayWithChunks[arrayWithChunks.length - i]);
      }
      if (arrayWithChunks[arrayWithChunks.length - i].length < FLOOR_NUMBER) {
        // let lastGoodChunk: T[] = arrayWithChunks[arrayWithChunks.length - i - 1];
        newArray.push([
          ...arrayWithChunks[arrayWithChunks.length - i - 1].splice(
            arrayWithChunks[arrayWithChunks.length - i - 1].length -
              (FLOOR_NUMBER -
                arrayWithChunks[arrayWithChunks.length - i].length),
            arrayWithChunks[arrayWithChunks.length - i - 1].length
          ),
          ...arrayWithChunks[arrayWithChunks.length - i],
        ]);
      }
    }
    if (arrayWithChunks[0]) {
      newArray.push(arrayWithChunks[0]);
    }
    return newArray.reverse();
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
