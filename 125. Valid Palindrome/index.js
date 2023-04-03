/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    const len = s.length
    let isPalindrome = true
    for(let i=0; i<len/2; i++){
      if(s[i] !== s[len-i-1]){
        isPalindrome = false
        break
      }
    }
    if(s === '') return true
    return isPalindrome
};