const alphabet = "abcdefghijklmnopqrstuvxyz".split("");
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
const emptyArray: any[] = [];

const isArrayElementInRange = <T>(array: T[]): T[] | undefined => {
  if (array.length >= FLOOR_NUMBER && array.length <= CEIL_NUMBER) {
    emptyArray.push(array);
    return emptyArray;
  }
  isArrayElementInRange(
    array.splice(0, getRandomIntInRange(FLOOR_NUMBER, CEIL_NUMBER))
  );
};

const pushElementsToFinalArray = <T>(array: T[]) => {
  const secondEmptyArray: T[] = [];
  const average = array.length / ((FLOOR_NUMBER + CEIL_NUMBER) / 2);
  for (let i = 0; i < average; i++) {
    isArrayElementInRange(array);
    secondEmptyArray.push(emptyArray.pop());
  }
  return checkIfrArrayMeetsCriteria(secondEmptyArray, array);
};

const checkIfrArrayMeetsCriteria = <T, K>(array1: T[], array2: (T | K)[]) => {
  if (array1.flat(1).length !== array2.length) {
    isArrayElementInRange(array1);
  }
  return array1;
};

const aggregateIntoChunks = <T>(array: T[]) => {
  isArrayLengthInRange(array);
  return pushElementsToFinalArray(array);
};

console.log(aggregateIntoChunks(alphabet));

// console.log(aggregateIntoChunks(alphabet));

// const chunks = aggregateIntoChunks(alphabet);

// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]
