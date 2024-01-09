function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]);
    }
  
    return accumulator;
  }

  let numbers = [1, 2, 3, 4, 5];
  let sum = customReduce(numbers, (acc, num) => acc + num, 0);
  console.log(sum);
  