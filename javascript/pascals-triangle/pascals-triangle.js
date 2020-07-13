export const rows = (depth) => {
  let array = []
  while (array.length < depth) {
    array.push([])
  }
  let newArr = array.map((subArr, arrIndex) => {
    while (subArr.length < arrIndex + 1) {
      subArr.push(1)
    }
    return subArr
  })
  let final = newArr
  newArr.forEach((subArr, arrIndex, array) => {
    subArr.forEach((number, numIndex) => {
      if (numIndex !== 0 && numIndex !== subArr.length - 1) {
        final[arrIndex][numIndex] = (array[arrIndex - 1][numIndex - 1] + newArr[arrIndex - 1][numIndex]);
      }
    })
  })
  return final         
};


