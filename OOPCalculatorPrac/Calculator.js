var input = "-5+11-3";
let leftover = [];

console.log("input: " + input);
console.log(calculate(input));

function calculate(s) {
    if (s.length === 0) return 0;

    // HANDLE SPACE
    s = s.trim();

    let i = 0;
    let res = 0;
    let pos = true;
    let numStr = '';

    for (let i=0;i < s.length;i++){
        if (s[i] === '(') {
            //when the brackets starts, get res of numStr
            res += pos ? parseInt(numStr) : 0-parseInt(numStr);
            //reset numStr
            numStr = '';

            // find closing brackets to get its index
            let openCount = 1;
            let j = i+1;
            while (openCount > 0){
                if (s[j] === "(") openCount++;
                if (s[j] === ")") openCount--;
                j++;
            }
            j--;

            //get res between brackets
            let inBracketsRes = calculate(s.substring(i+1, j));
            
            res += pos ? inBracketsRes : 0-inBracketsRes;
            i = j;
        }
        //if char is digit
        if (s[i]<='9' && s[i]>='0'){
            numStr+=s[i];
        }
        //if char is +, -
        if (s[i]==='-' || s[i]==='+') {
            //use numStr to do previous calc
            res += pos ? Number(numStr) : 0 - Number(numStr);
            console.log("res: "+res);
            //reset numStr
            numStr = '';

            //get next positive boolean
            pos = s[i] === '+';
        }
    }

    //if there's still number left, use it up
    if (numStr.length) {
        res += pos ? parseInt(numStr) : (0-parseInt(numStr));
    }

    console.log("res: "+res);
    return res;
};

// function calculator(str) {
//     console.log("running.");
//     str = str.trim();
//     var res = "";
//     //these are about brackets
//     var leftBracket = str.indexOf('(');
//     var rightBracket = -1;
//
//     if (leftBracket != -1) {
//         //after this loop ritghtBracket will be the index of the most right closing bracket
//         for (var i = 0; i < str.length; i++) {
//             if (str[i] === ')') {
//                 rightBracket = i;
//             }
//         }
//         if (rightBracket === -1) {
//             console.log("Invalid brackets.");
//             process.exit(1);
//         }
//         //calculate value in brackets
//         console.log('calculate in bracket: ' + str.substring(leftBracket + 1, rightBracket));
//         res = calculate(str.substring(leftBracket + 1, rightBracket));
//         console.log("after brackets, res = " + res);
//
//         //above is in bracket calculation, now add value in bracket to value out of brackets;
//         let beforeBrackets = str.substring(0, leftBracket);
//         console.log("before brackets: " + beforeBrackets);
//         let afterBrackets = str.substring(rightBracket + 1, str.length);
//         console.log("after brackets: " + afterBrackets);
//
//         res = calculate(beforeBrackets+res);
//         res = calculate(res+afterBrackets)
//     }
//     //if no brakets, go calculate
//     else {
//         res = calculate(str);
//     }
//     return res;
// }
//
// function calculate(str) {
//     str=str.trim();
//     console.log("calculate: " + str);
//     var front = "";
//     var back = "";
//     var sign = getLastSign(str);
//     if (sign !== -1) {
//         // console.log("+ sign found.");
//         front = str.substring(0, sign);
//         back = str.substring(sign + 1, str.length);
//         console.log('front: ' + front);
//         console.log('back: ' + back);
//
//         //handle empty
//         if(front===""){
//             return "";
//         }
//
//         //if front still contains signs
//         while (getLastSign(front) !== -1) {
//             console.log("front=" + front);
//             front = calculate(front);
//         }
//         //when front is number only
//         if (getLastSign(front) === -1) {
//             var result = getLastSign(front);
//
//             //minus
//             if (str[sign] === '-') {
//                 console.log(front+" minus "+back);
//                 result = parseInt(front) - parseInt(back);
//             }
//
//             //plus
//             else if (str[sign] === '+') {
//                 console.log(front+" plus "+back);
//                 result = parseInt(front) + parseInt(back);
//             }
//             // else {
//             //     console.log("Invalid input.");
//             //     process.exit(1);
//             // }
//             console.log("result: " + result);
//             return "" + result;
//         }
//     }
//     //There should only be numbers at this section
//     else {
//         if (getLastSign(str) !== -1) {
//             if(str==="") return "";
//
//             console.log("Invalid number input.");
//             process.exit(1);
//         }
//         //if its valid number
//         console.log("valid number: " + str);
//         return str;
//     }
//     process.exit(1);
// }
//
// function getLastSign(str) {
//     var sign = -1;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] < '0' || str[i] > '9') {
//             sign = i;
//         }
//     }
//     // console.log(str+" is number only.");
//     return sign;
// }
