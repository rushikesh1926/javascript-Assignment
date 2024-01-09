function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  

  let numbers = [1, 2, 3, 4, 5];
  let squaredNumbers = customMap(numbers, (num) => num * num);
  console.log(squaredNumbers);
  