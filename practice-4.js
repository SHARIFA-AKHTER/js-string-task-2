 function replaceXWithY(s) {
    if (s.includes('x') || s.includes(X)){
        s = s.replace(/x/g,'y').replace(/X/g, 'Y');
        
    }
    return s;
 }

 let string = "eXample with x and X in the teXt";

 console.log(replaceXWithY(string));  