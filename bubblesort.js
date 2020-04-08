function bubbleSort(array) {
  return array.sort((a, b) => {
    console.log(a, b, ' ');
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
}
