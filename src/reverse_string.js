const reverseString = (string) => {
    if(typeof(string) === "string"){
        let arr = string.split('')
        let res = ''
        let i = arr.length - 1
        while(i >= 0) {
            res += arr[i]
            i -= 1
        }
        return res
    }else{
        throw new Error('please provide a string')
    }
    
}

module.exports = reverseString;