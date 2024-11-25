const recursiveBinarySearchWithFirstList = (
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
    return recursiveBinarySearchWithFirstList(list, target, midpoint + 1, last);
  } else {
    // Search the left half
    return recursiveBinarySearchWithFirstList(
      list,
      target,
      first,
      midpoint - 1
    );
  }
};

const recursiveBinarySearchListLength = (list, target) => {
  // Base case: if the list is empty
  if (list.length === 0) {
    return `Target: ${target} not found in the list.`;
  }

  // Calculate the midpoint
  const midpoint = Math.floor(list.length / 2);

  if (list[midpoint] === target) {
    // Target found
    return `Target: ${target} found at index: ${midpoint}`;
  } else if (list[midpoint] < target) {
    // Search the right half
    return recursiveBinarySearchListLength(list.slice(midpoint + 1), target);
  } else {
    // Search the left half
    return recursiveBinarySearchListLength(list.slice(0, midpoint), target);
  }
};

// Test the function with multiple cases ------- recursiveBinarySearchWithFirstList 🟧 🟪
console.log(
  recursiveBinarySearchWithFirstList([1, 2, 3, 4, 10, 6, 7, 9, 8, 5], 40)
);
console.log(
  recursiveBinarySearchWithFirstList([1, 2, 3, 4, 10, 6, 7, 9, 8, 5], 5)
);

console.log("--------------------");
// Test the function with multiple cases  ------ recursiveBinarySearchListLength 🟩 🟦
console.log(
  recursiveBinarySearchListLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 40)
); // Found
console.log(
  recursiveBinarySearchListLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)
); // Not Found
