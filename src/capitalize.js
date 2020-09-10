const capitalize = (string) => {
    if(typeof(string) === "string"){
        let arr = string.split('')
        arr[0] = arr[0].toUpperCase().toString()
        let res = '';
        arr.forEach(element => {
            res += element
        });
        return res
    }else{
        throw new Error('please provide a string')
    }
    

}
module.exports = capitalize;