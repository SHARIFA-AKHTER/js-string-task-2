//Count how many times a string has the letter `a`

const countA = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'A') {
            count++;
        }
      
    }
    return count;
};

// const myString = "Aardvark is an animal in Africa";
const myString = "I am a good man"
const result = countA(myString);

console.log(result);