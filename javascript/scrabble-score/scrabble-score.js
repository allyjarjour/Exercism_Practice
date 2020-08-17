//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let scores = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

export const score = (word) => {
  let letterScore = 0
  word.toUpperCase().split("").forEach(letter => {
    for (const numKey in scores) {
      if (scores[numKey].includes(letter)) {
        letterScore = letterScore + Number(numKey) 
      }
    }
  })
  return letterScore
};
