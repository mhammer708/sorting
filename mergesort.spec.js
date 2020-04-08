describe("Split function", function () {
  it("is able to split an array into two halves", function () {
    expect(split([2, 3, 4, 5])).toEqual([
      [2, 3],
      [4, 5],
    ]);
  });
});

describe("Merge function", function () {
  it("is able to merge two sorted arrays into one sorted array", function () {
    expect(merge([1, 2, 3], [6, 7, 8])).toEqual([1, 2, 3, 6, 7, 8]);
  });
});

describe("MergeSort function", function () {
  it("is able to merge two sorted arrays into one sorted array", function () {
    expect(mergeSort([2, 3, 4, 1])).toEqual([1, 2, 3, 4]);
  });
});
