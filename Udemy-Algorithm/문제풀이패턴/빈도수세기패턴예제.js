// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.


function validAnagram(first, second){
    if(first.length !== second.length){
        return false; 
    }
    const lookup = {};
    first.split('').reduce((acc, cur) => {
        acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
        return acc;
    }, lookup);

    for(let i = 0; i < second.length; i++){
        let letter = second[i];
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}