//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  colors = colors.map((color) => color.charAt(0).toUpperCase() + color.slice(1));
  const colorMap = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Grey', 'White'];
  return colors.length >= 2
    ? Number(`${colorMap.indexOf(colors[0])}${colorMap.indexOf(colors[1])}`)
    : colorMap.indexOf(colors[0]);
};


