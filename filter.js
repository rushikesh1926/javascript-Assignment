function customFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  let numbers = [1, 2, 3, 4, 5];
  let evenNumbers = customFilter(numbers, (num) => num % 2 === 0);
  console.log(evenNumbers);
  