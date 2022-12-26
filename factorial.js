function factorial(nums) {
  if (nums === 1 || nums === 0) {
    return 1;
  }

  return nums * factorial(nums - 1);
}

console.log(factorial(4));
