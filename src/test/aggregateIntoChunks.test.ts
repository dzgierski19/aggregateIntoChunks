import { aggregateIntoChunks } from "../app/aggregateIntoChunks";

describe("aggregateIntoChunks testing", () => {
  let alphabet: string[];
  let result: string[][];
  beforeEach(() => {
    alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    result = aggregateIntoChunks(alphabet);
  });

  it("should return proper when every chunk has more elements than FLOOR_NUMBER and less than CEIL_NUMBER", () => {
    const isEveryChunkInRange = result.every(
      (element) => element.length >= 5 && element.length <= 7
    );
    expect(isEveryChunkInRange).toBe(true);
  });
  it("should return proper when sum of number of elements in every chunk is equal number of elements in parameter", () => {
    const sumOfElementsInChunks = result.reduce((acc, a) => acc + a.length, 0);
    expect(sumOfElementsInChunks).toBe(alphabet.length);
  });
  describe("it returns error when", () => {
    it("- floor number is higher than number of elements in array", () => {
      const smallArray = ["a", "b", "c", "d"];
      function expectError() {
        aggregateIntoChunks(smallArray);
      }
      expect(expectError).toThrow();
    });
  });
});
