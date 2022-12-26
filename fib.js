function fib(nums) {
  if (nums === 0) {
    return 0;
  }
  if (nums === 1) {
    return 1;
  }

  return fib(nums - 2) + fib(nums - 1);
}

console.log(fib(4));
