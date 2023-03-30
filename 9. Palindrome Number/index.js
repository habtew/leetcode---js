/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const mod = x.toString()
    return mod.split('').reverse().join('')===mod
};