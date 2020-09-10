const capitalize = (string) => {
  if (typeof (string) === 'string') {
    const arr = string.split('');
    arr[0] = arr[0].toUpperCase().toString();
    let res = '';
    arr.forEach(element => {
      res += element;
    });
    return res;
  }
  throw new Error('please provide a string');
};
module.exports = capitalize;