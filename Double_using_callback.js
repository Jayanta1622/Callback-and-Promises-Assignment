function doubleArrayElements(arr, callback) {
    const doubledArray = arr.map(callback);
    return doubledArray;
  }
  function doubleNumber(number) {
    return number * 2;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const doubledArray = doubleArrayElements(originalArray, doubleNumber);
  console.log(doubledArray);
  