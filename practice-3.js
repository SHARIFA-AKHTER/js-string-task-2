
//Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
function containsSllVowels(s){
    const vowels = ['a','e','i','o','u']
    s = s.toLowerCase();
    return vowels.every(vowel => s.includes(vowel));
}

let string = "Education is important";
console.log(containsSllVowels(string));