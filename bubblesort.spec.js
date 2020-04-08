window.swap = function (array) {
  return array.sort((a, b) => {
    console.log(a, b, ' ');
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
};

beforeEach(function () {
  spyOn(window, 'swap').and.callThrough();
});

describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts an array with a length of 2', function () {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(window.swap.calls.count()).toEqual(1);
  });
  // it('calls swap 1 time', function () {});
  it('sorts an array with any length', function () {
    expect(bubbleSort([4, 3, 7, 5, 9, 1])).toEqual([1, 3, 4, 5, 7, 9]);
  });
  it('sorts an array with numbers greater than 10', function () {
    expect(bubbleSort([5, 9, 11, 3])).toEqual([3, 5, 9, 11]);
  });
  it('sorts an array with multiple instances of the same number', function () {
    expect(bubbleSort([4, 6, 3, 6, 4, 22])).toEqual([3, 4, 6, 6, 9, 22]);
  });
});
