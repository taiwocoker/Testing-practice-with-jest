const capitalize = string => {
  if (typeof (string) === 'string') {
    return string[0].toUpperCase() + string.substring(1, string.length);
  }
  throw new Error('please provide a string');
};
module.exports = capitalize;