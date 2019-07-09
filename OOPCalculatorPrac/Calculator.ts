let input: string = "3+2-(45-6+2+5)";
console.log("input: "+input);
// calculator(input);

function calculator(str: string): string{
    console.log("running.");
    str = str.trim();
    let res = "";
    if(!str) {
        console.log("empty input.");
        return "NaN";
    }
    else{
        //these are about brackets
        let leftBracket = str.indexOf('(');
        let rightBracket = -1;

        if(leftBracket!=-1){
            for(let i=0;i<str.length;i++){
                if(str[i]===')'){
                    rightBracket=i;
                }
            }
            if(rightBracket===-1){
                console.log("Invalid brackets.");
                return "NaN";
            }

            //calculate value in brackets
            console.log('calculate in bracket: '+str.substring(leftBracket+1, rightBracket));
            res = calculate(str.substring(leftBracket+1, rightBracket));
            console.log("after brackets, res = "+res);
        }

        //if no brakets, go calculate
        else{
            res = calculate(str);
        }
        return res;
    }
}

function calculate(str: string): string{
    console.log("calculate: "+str);
    let front="";
    let back="";

    let sign = getLastSign(str);
        //Math.min(str.indexOf('+'),str.indexOf('-'));

    if(sign!==-1){
        // console.log("+ sign found.");
        front = str.substring(0,sign);
        back = str.substring(sign+1, str.length);
        console.log('front: '+front);
        console.log('back: '+back);

        //if back still contains signs
        while(getLastSign(front)!==-1) {
            console.log("front="+front);
            back = calculate(front);
        }
        if(getLastSign(front)===-1){
            let result = getLastSign(back);
            if(str[sign]==='-'){
                result = parseInt(front) - parseInt(back);
            }
            else if(str[sign]==='+'){
                result = parseInt(front) + parseInt(back);
            }
            else{
                console.log("Invalid input.");
                return "NaN";
            }
            console.log("result: " + result);
            return "" + result;
        }
    }

    //There should only be numbers at this section
    else{
        if(getLastSign(str)!==-1){
            console.log("Invalid number input.");
            return "NaN";
        }

        //if its valid number
        console.log("valid number: "+str);
        return str;
    }
    return "NaN";
}

function getLastSign(str:string):number{
    let sign = -1;

    for(let i=0;i<str.length;i++){
        if(str[i]<'0'||str[i]>'9'){
            sign=i;
        }
    }
    // console.log(str+" is number only.");
    return sign;
}