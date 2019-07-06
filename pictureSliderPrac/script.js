var imgs = [
    "https://static1.squarespace.com/static/54ba9b41e4b0bb2b01a8784d/5acbae23352f53a44f1aa583/5acbae23f950b742523a3fe4/1523297831482/10-tobi-kadachi.jpg",
    "https://media1.tenor.com/images/e0075a49020ec274fb637e539918af89/tenor.gif?itemid=11491605",
    "https://media1.tenor.com/images/bebedef68eac400de63302ee979b3fc5/tenor.gif?itemid=11727604",
    "https://media1.tenor.com/images/09cf24f3f1f9228e7b22a6c8ca96d91a/tenor.gif?itemid=12896150",
    "https://i.imgur.com/BTUTaE0.gif",
    "https://i.imgur.com/cwgdG3X.gif"
];
var playBtText = "<i class='fas fa-play'></i>";
var stopBtText = "<i class='fas fa-pause'></i>";
var startBt = document.getElementById("startBt");
var img = document.getElementById('funMonsters');
var indicators = document.getElementById("indicator");
var dots = [];
var displaying = false;
var counter = -1;
var interval;
createDots();
//create dots
function createDots() {
    var count = 0; //counter for button create
    imgs.forEach(function () {
        var temp = document.createElement("button");
        temp.setAttribute("count", count++ + "");
        temp.setAttribute("class", "dot");
        temp.setAttribute("onclick", "btControlPic(" + count + ")");
        indicators.appendChild(temp);
        dots.push(temp);
    });
}
function btControlPic(num) {
    //change img of the slider
    img.setAttribute("src", imgs[num - 1]);
    //changer counter
    counter = num - 1;
    //stop displaying, so user can look at the same picture as much as they want
    stopDisplay();
    //change style for the indicator
    refreshIndicator();
}
function startBtTrigger() {
    if (!displaying) {
        display(2);
    }
    else {
        stopDisplay();
    }
}
function display(timerGap) {
    //change button
    displayNext();
    interval = setInterval(displayNext, timerGap * 1000);
}
function displayNext() {
    // console.log("display start counter: "+counter);
    //change displaying state first
    displaying = true;
    //console.log("displaying");
    //move to next img
    img.setAttribute("src", imgs[++counter]);
    //change class of the indicator
    refreshIndicator();
    // console.log("display after counter: "+counter);
    //reset counter to avoid indexOutofLength
    if (counter >= imgs.length - 1) {
        //console.log("reset counter");
        counter = -1;
        // console.log("display counter roll back: "+counter);
    }
    buttonDisplayChange();
}
//this function is to change indicator's style
function refreshIndicator() {
    // console.log("refresh counter: "+ counter);
    //reset all dots css class and bring curr pic button to class curr
    dots.forEach(function (dot) {
        dot.setAttribute("class", "dot");
    });
    //console.log("gonna change indicator "+ counter);
    dots[counter].setAttribute("class", "dot curr");
}
function stopDisplay() {
    //change displaying state
    displaying = false;
    //console.log("stop display");
    //stop interval
    clearInterval(interval);
    //change button
    buttonDisplayChange();
}
function buttonDisplayChange() {
    // console.log(displaying);
    if (displaying) {
        // console.log(" to stop");
        startBt.innerHTML = stopBtText;
    }
    else {
        // console.log("to playing");
        startBt.innerHTML = playBtText;
    }
}
function leftBt() {
    // console.log("left start counter: "+counter);
    //counter change
    if (counter <= -1) {
        counter = imgs.length - 3;
    }
    else if (counter == 0) {
        counter = imgs.length - 2;
        // console.log("counter back to end");
    }
    else {
        counter -= 2;
    }
    displayNext();
    //stop after display next
    stopDisplay();
}
function rightBt() {
    displayNext();
    stopDisplay();
}
