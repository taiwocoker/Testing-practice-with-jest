const capitalize = (string) => {
    let arr = string.split('')
    arr[0] = arr[0].toUpperCase().toString()
    let res = '';
    arr.forEach(element => {
  	    res += element
    });
    return res

}
module.exports = capitalize;