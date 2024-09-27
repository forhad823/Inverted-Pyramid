/**
 * Generates an inverted pyramid pattern using '#' with the specified number of levels.
 *
 * @param {number} levels - The number of levels for the inverted pyramid.
 */
function generateInvertedPyramid(levels) {
  // Loop through each level, starting from the widest row
  for (let currentLevel = levels; currentLevel >= 1; currentLevel--) {
    let row = "";

    // Add leading spaces to align the pyramid
    for (let spaces = 0; spaces < levels - currentLevel; spaces++) {
      row += " ";
    }

    // Add the hashes ('#') to form the inverted pyramid structure
    for (let hashes = 0; hashes < (2 * currentLevel - 1); hashes++) {
      row += "#";
    }

    // Output the current row of the inverted pyramid
    console.log(row);
  }
}

// Example usage
generateInvertedPyramid(5);
