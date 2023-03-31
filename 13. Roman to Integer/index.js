/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const Symbol = {'I':1,'a':4,'V':5,'b':9,'X':10,'c':40,'L':50,'d':90,'C':100,'e':400,'D':500,'f':900,'M':1000}  
    const substringList = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
    const replacementList = ['a', 'b', 'c','d', 'e', 'f']

    let count = 0

    for (let i = 0; i < substringList.length; i++) {
    const substringToReplace = substringList[i];
    const replacement = replacementList[i];
    const regex = new RegExp(substringToReplace, 'g');
    s = s.replace(regex, replacement);
    }  

    for(let i of s){
    count += Symbol[i]
    }
    return count
};