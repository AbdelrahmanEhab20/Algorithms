const recursiveBinarySearch = (
  list,
  target,
  first = 0,
  last = list.length - 1
) => {
  // Ensure the list is sorted for binary search
  if (first === 0 && last === list.length - 1) {
    list.sort((a, b) => a - b);
  }

  // Base case: if the range is invalid
  if (first > last) {
    return `Target: ${target} not found in the list.`;
  }

  // Calculate the midpoint
  const midpoint = Math.floor((first + last) / 2);

  if (list[midpoint] === target) {
    // Target found
    return `Target: ${target} found at index: ${midpoint}`;
  } else if (list[midpoint] < target) {
    // Search the right half
    return recursiveBinarySearch(list, target, midpoint + 1, last);
  } else {
    // Search the left half
    return recursiveBinarySearch(list, target, first, midpoint - 1);
  }
};

// Test the function with multiple cases
console.log(recursiveBinarySearch([1, 2, 3, 4, 10, 6, 7, 9, 8, 5], 12)); // Target not found
console.log(recursiveBinarySearch([1, 2, 3, 4, 10, 6, 7, 9, 8, 5], 9)); // Target found
