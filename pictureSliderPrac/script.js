let imgs = [
    "https://static1.squarespace.com/static/54ba9b41e4b0bb2b01a8784d/5acbae23352f53a44f1aa583/5acbae23f950b742523a3fe4/1523297831482/10-tobi-kadachi.jpg",
    "https://media1.tenor.com/images/e0075a49020ec274fb637e539918af89/tenor.gif?itemid=11491605",
    "https://media1.tenor.com/images/bebedef68eac400de63302ee979b3fc5/tenor.gif?itemid=11727604",
    "https://media1.tenor.com/images/09cf24f3f1f9228e7b22a6c8ca96d91a/tenor.gif?itemid=12896150",
    "https://i.imgur.com/BTUTaE0.gif",
    "https://i.imgur.com/cwgdG3X.gif"
];
let start = false;
let startBt = document.getElementsByName('startBt')
let img = document.getElementById('funMonsters')
let dots=new Set()
let interval;
let disCount = 0
let count=0

//create dots
imgs.forEach((ig)=>{
    console.log("add dots")
    let indicator = document.getElementById("indicator")
    let temp = document.createElement("button")
    temp.innerHTML = "bt"
    temp.setAttribute("count", count++ +"")
    let fCount = temp.getAttribute("count")
    temp.setAttribute("onclick", "btControlPic("+fCount+")")
    indicator.appendChild(temp)
    dots.add(temp)
})
console.log(dots)

function display(btn) {

    if(start){
        stopDisplay(btn)
    }
    else{
        startDisplay(btn)
    }
}

function startDisplay(btn){

    start = true;
    //replace bt's text to stop
    btn.innerHTML='Stop Display'

    img.setAttribute("src",imgs[disCount++])
    if(disCount>=imgs.length){
        disCount=0
    }

    if(imgs!=null){
    //if imgs list is not empty starts display
        displayAuto(4)
    }
}

function stopDisplay(btn){
    start = false
    btn.innerHTML = 'Start Display'

    clearInterval(interval)
}

//disTIme is the time of waiting unit in sec
function displayNextPic() {
    img.setAttribute('src',imgs[disCount++])
    //clear counter after a cycle
    if(disCount==imgs.length){
        disCount=0
    }
}

function displayAuto(gapTime){
    interval = setInterval(()=>{
        displayNextPic()
    },gapTime*1000)
}

function btControlPic(fCount){
    disCount = fCount
    img.setAttribute("src",imgs[disCount++])
    if(disCount>=imgs.length){
        disCount=0
    }
}