const linearSearch = (list, target) => {
  // Loop through the list to find the target
  for (let index = 0; index < list.length; index++) {
    if (list[index] === target) {
      return `Target: ${target} found at index: ${index}`;
    }
  }
  // If target is not found, return -1
  return `Target: ${target} not found in the list.`;
};

// Test the function with multiple cases
console.log(linearSearch([1, 2, 3, 4, 10, 6, 7, 9, 8, 5], 12));
console.log(linearSearch([1, 2, 3, 4, 10, 6, 7, 9, 8, 5], 10));
