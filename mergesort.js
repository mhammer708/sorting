function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let firstHalf = null;
  let secondHalf = null;

  if (wholeArray.length % 2 === 0) {
    firstHalf = wholeArray.slice(0, wholeArray.length / 2);
    secondHalf = wholeArray.slice(wholeArray.length / 2);
  } else {
    firstHalf = wholeArray.slice(0, Math.round(wholeArray.length / 2));
    secondHalf = wholeArray.slice(Math.round(wholeArray.length / 2));
  }

  return [firstHalf, secondHalf];
}

// 1 2 5  vs  3 4 8

function merge(arr1, arr2) {
  if (arr1[0] < arr2[0]) {
    return arr1.concat(arr2);
  } else {
    return arr2.concat(arr1);
  }
}

function mergeSort(array) {
  // split into 'sorted' arrays ie [6] [7] [8]
  // [4,3,2, 1]
  // ([4,3],[2,1])
  // ([3,4], [1,2])
  //

  // split each element into partitions of size 1
  // recursively merge adjacent partitions
  //   for i = leftPartIdx to rightPartIdx
  //     if leftPartHeadValue <= rightPartHeadValue
  //       copy leftPartHeadValue
  //     else: copy rightPartHeadValue
  // copy elements back to original array

  if (array.length === 1) {
    return array;
  } else {
    const splitArr = split(array);

    // array.concat(mergeSort(array.slice))
    // [[1],[2]]
    // array.push(mergeSort(array.slice(1)))

    if (splitArr[0].length === 1) {
      const mergedArr = merge(...splitArr);

      return mergedArr;

      // if(solution.length === 2) return merge(solution)
    } else {
      merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
    }

    // if(array[0].length === 1) {

    //   merge(array[0],array[1])
    // } else {

    //   return  mergeSort(array.slice())
    // }

    // [1,3,4,2]
    // [[1,3],[4,2]]
    // [1,3],[2,4]

    // [[[1],[3]],[[4],[2]]]
    // [[1,3],[2,4]]

    // [1] | [[3],[2,4]]
    // [1,2] | [[3],[4]]
    // [[1][2]],[[3][4]]
  }

  // merge it 1 array ie [6, 7, 8]
}
