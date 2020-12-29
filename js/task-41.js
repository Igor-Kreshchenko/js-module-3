function includes(array, value) {
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }

  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
