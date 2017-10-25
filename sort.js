function sortArr(arr) {
  var arr2 = arr.slice();
  function compare(a, b) {
  return a - b;
}
  arr2.sort(compare);
  console.log(arr2);
  console.log('sort is over');
}
sortArr([1, 3, 7, 8, 9, 2, 22, 38, 45]);
