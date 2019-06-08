function popName(username){
    console.log(username);
    alert("name: "+username);
}

var cars = ['benz','honda','toyota','lamborghini','subaru','ferrari','nissan','aston martin','mazda'];
var games = ['skyrim','monster hunter','league of legends','far cry','assasin\'s creed','borderland','darksiders','the scroll of taiwu']
// for(let i=cars.length-1; i>=0;i--){
//     console.log(cars[i].toUpperCase());
// }

//homework
//1. for loop, print every 2 element,
//2. while loop, print the second last item
//3. do while, print the second item

loopExcercise(cars)
loopExcercise(games)

function loopExcercise(arys){
    console.log('Loop excercise print start for array: '+arys)
    console.log('q1, print every 2 element:')
    let i=0
    //1
    for(i=0;i<arys.length;i+=2){
        console.log(arys[i])
    }
    console.log('q1 done')
    //2
    console.log('q2, print the second last item:')
    i=0;
    while(i<arys.length){
        if(i==arys.length-2) console.log(arys[i])
        i++
    }
    console.log('q2 done')
    //3
    console.log('q3, print the second item:')
    i=0
    do{
        if(i==1) console.log(arys[i])
         i++
    }while(i<arys.length)
    console.log('q3 done')
}