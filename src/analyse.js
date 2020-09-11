const analyse = array => {
  if (Array.isArray(array) && array.length > 0) {
    return {
      average: array.reduce((a, b) => a + b, 0) / array.length,
      min: Math.min(...array),
      max: Math.max(...array),
      length: array.length,
    };
  }
  throw new Error('Pass arrays only');
};
module.exports = analyse;