function removeMiddle(arr) {
  const length = arr.length;
  if (length === 0) 
    return arr; 

  const middleIndex = Math.floor(length / 2);
  const result = [];

  for (let i = 0; i < length; i++) {
    if (i !== middleIndex) {
      result.push(arr[i]); 
    }
  }

  return result;
}

const omar = [1, 2, 3, 4, 5, 8, 20];
const updatedArray = removeMiddle(omar);
console.log(updatedArray); 