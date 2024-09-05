//Count how many times a string has the letter `a` or `A`
function countAInString(s){
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i]=== 'a' || s[i] ==='A'){
            count++;
        }
    }
    return count;
}

// let string = "Apples are amazing";
let string = "Amar orange valo LagA"
console.log(countAInString(string));