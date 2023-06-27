export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const idx in array) {
    if (array[idx]) {
      newArray[idx] = appendString + array[idx];
    }
  }

  return newArray;
}
