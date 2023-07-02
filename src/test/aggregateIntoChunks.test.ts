import { aggregateIntoChunks } from "../app/aggregateIntoChunks";

describe("aggregateIntoChunks testing", () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const result = aggregateIntoChunks(alphabet);
  it("should return proper when every chunk has more elements than FLOOR_NUMBER and less than CEIL_NUMBER", () => {
    const doesEveryChunkHasMoreThan = result.every(
      (element) => element.length >= 5 && element.length <= 7
    );
    expect(doesEveryChunkHasMoreThan).toBe(true);
  });
  it("should return proper when every chunk has more elements than FLOOR_NUMBER and less than CEIL_NUMBER", () => {
    const alphabet2 = "abcdefghijklmnopqrstuvwxyz".split("");
    const doesEveryChunkHasMoreThan = result.reduce(
      (acc, a) => acc + a.length,
      0
    );
    expect(doesEveryChunkHasMoreThan).toBe(alphabet2.length);
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
