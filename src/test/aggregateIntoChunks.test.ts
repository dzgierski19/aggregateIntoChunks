import { aggregateIntoChunks } from "../app/aggregateIntoChunks";

describe("aggregateIntoChunks testing", () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const result = aggregateIntoChunks(alphabet);
  it("should return proper every chunk has more than FLOOR_NUMBER elements", () => {
    const doesEveryChunkHasMoreThan = result.every(
      (element) => element.length >= 5
    );
    expect(doesEveryChunkHasMoreThan).toBe(true);
  });
  it("should return proper every chunk has less than CEIL_NUMBER elements", () => {
    const doesEveryChunkHasLessThan = result.every(
      (element) => element.length <= 7
    );
    expect(doesEveryChunkHasLessThan).toBe(true);
  });
  describe("it returns error when", () => {
    it("- floor Number is higher than number of elements in array", () => {
      const smallArray = ["a", "b", "c", "d"];
      function expectError() {
        aggregateIntoChunks(smallArray);
      }
      expect(expectError).toThrow("");
    });
  });
});
