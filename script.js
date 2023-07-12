function secondHighest(arr) {
  if (arr.length < 2) {
    return -Infinity;
  }

  // Remove duplicate elements from the array
  const uniqueArr = Array.from(new Set(arr));

  // If all elements are the same, return -Infinity
  if (uniqueArr.length === 1) {
    return -Infinity;
  }

  // Sort the array in descending order
  const sortedArr = uniqueArr.sort((a, b) => b - a);

  // Return the second highest element
  return sortedArr[1];
}

