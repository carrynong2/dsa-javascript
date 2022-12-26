function recursiveRange(nums) {
  if (nums === 1) {
    return 1;
  }

  return nums + recursiveRange(nums - 1);
}

console.log(recursiveRange(6));
