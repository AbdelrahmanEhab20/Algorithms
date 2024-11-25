const binarySearch = (list, target) => {
  // Ensure the list is sorted for binary search
  list.sort((a, b) => a - b);

  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    const midpoint = Math.floor((first + last) / 2);

    if (list[midpoint] === target) {
      // Return the midpoint as the index of the target
      return `Target: ${target} found at index: ${midpoint}`;
    } else if (list[midpoint] < target) {
      // Ignore the left half
      first = midpoint + 1;
    } else {
      // Ignore the right half
      last = midpoint - 1;
    }
  }

  // If the target is not found
  return `Target: ${target} not found in the list.`;
};

// Test the function with multiple cases
console.log(binarySearch([1, 2, 3, 4, 10, 6, 7, 9, 8, 5], 12));
console.log(binarySearch([1, 2, 3, 4, 10, 6, 7, 9, 8, 5], 2));
