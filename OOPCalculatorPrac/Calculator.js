var input = "-5-11-3";
console.log("input: " + input);
calculator(input);

let calculator = (str) => {
    if(!str){
        process.exit();
    }

    str = str.trim();
    let num = 0;
    let op;

    for(let i=str.length-1;i>=0;i--) {
        let chr = str[i];

        //with brackets
        if(chr==='('){
            let bracket=1;
            let bInd = i;

            while(bracket>0){
                bInd++;
                //handle err on brackets:
                if(bInd>str.length){
                    console.log("Wrong bracket useage.");
                    process.exit();
                }

                if(str[bInd]===')'){
                    bracket--;
                }
                else if(str[bInd]==='('){
                    bracket++;
                }
            }

            //get res from in brackets value
            calculate(str.substring(i,bInd));
            //the str reprensent with i should only contains non-in-brackets char
            i=bInd;
        }

        //without brackets
        //get number at front

    }
}

let operation = (op, a, b) => {
    let A = parseInt(a);
    let B = parseInt(b);

    switch(op) {
        case "+":
            return A + B
        case "-":
            return A - B
        case "/":
            return A / B
        case "/*:
            return A * B
        default:
            break;
    }
}

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
