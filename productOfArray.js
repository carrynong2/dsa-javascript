function productOfArray(arr) {
  let sum = 1;

  for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
}

console.log(productOfArray([1, 2, 3]));
