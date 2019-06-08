let disable = true;

function operation() {
    let v1 = document.getElementById("val1")
    let v2 = document.getElementById("val2")
    let operator = document.getElementById("operator").value
    let res = document.getElementById("res")
    let infoBar = document.getElementById("infoBar")

    let resV;
    let val1
    let val2

    if(v1.value==="" || v2.value===""){
        alert("Please enter for value 1 and value 2.")
    }
    else{
        val1 = parseInt(v1.value, 10)
        val2 = parseInt(v2.value, 10)

        switch (operator) {
            case "+": resV = add(val1,val2)
                //console.log("add")
                break;
            case "-": resV = minus(val1,val2)
                //console.log("-")
                break;
            case "*": resV = multiply(val1,val2)
                //console.log("*")
                break;
            case "/": resV = divide(val1,val2)
                //console.log("/")
                break;
            default:
                console.log("something has going on, please check again.")
                break;
        }
    }


    //after get result, bring value back to the browser
    //update info bar
    res.value = resV+""
    infoBar.innerHTML += val1+" "+operator+" "+val2+" = "+resV+"\n"
}

function checkDisable(){
    let v1 = document.getElementById("val1")
    let v2 = document.getElementById("val2")

    if(v1.value==="" || v2.value===""){
        disable=true;
    }
    else {
        disable=false;
    }
    disableButton()
}

function disableButton(){
    let but = document.getElementById("run")
    if(disable){
        but.setAttribute('disabled','')
        but.style.border = "2px red solid"
    }
    else{
        but.removeAttribute('disabled')
        but.style.border = "0"
    }
}

function add(val1, val2) {
    return val1+val2
}

function minus(val1,val2){
    return val1-val2
}

function multiply(val1,val2) {
    return val1*val2
}
function divide(val1,val2) {
    return val1/val2
}