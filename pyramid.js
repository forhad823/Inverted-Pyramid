/**
 * Generates a pyramid pattern using '#' with the specified number of levels.
 *
 * @param {number} levels - The number of levels for the pyramid.
 */
function generatePyramid(levels) {
  // Loop through each level, starting from the top
  for (let currentLevel = 1; currentLevel <= levels; currentLevel++) {
    let row = "";

    // Add leading spaces to center the pyramid
    for (let spaces = 0; spaces < levels - currentLevel; spaces++) {
      row += " ";
    }

    // Add the hashes ('#') to form the pyramid structure
    for (let hashes = 0; hashes < (2 * currentLevel - 1); hashes++) {
      row += "#";
    }

    // Output the current row of the pyramid
    console.log(row);
  }
}

// Example usage
generatePyramid(5);


/*   Output sample
       #       
      ###      
     #####     
    #######    
   #########   
  ###########  
 ############# 
###############

*/
