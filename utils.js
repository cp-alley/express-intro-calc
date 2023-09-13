const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  for (let i = 0; i < strNums.length; i++) {
    if (isNaN(Number(strNums[i]))) {
      throw new BadRequestError(`${strNums[i]} is not a number`);
    }

    strNums[i] = Number(strNums[i]);
  }

  return strNums;
}


module.exports = { convertStrNums };