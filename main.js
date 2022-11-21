//boolean

// false : 0, -0, '', null, undefined
// true : -1, 'hello', 'false'

// let obj = {
//   name: "ellie",
// };
// if (obj) {
//   console.log(obj, name);
// }

// obj && console.log(obj.name);



class Counter {
    constructor(runEveryFiveTimes){
        this.counter = 0; 
        this.callback = runEveryFiveTimes;
    }
}

increase(runIf5Times){
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0){
        this.callback && this.callback(this.counter);
        // if (this.callback){ 위와 기능 같음 
        //     this.callback(this.counter);
        // }
        
    }
}


function printSomething(num){
    console.log(`Wow! ${num}`);
}

function alertNum(num){
    alert(`Wow! ${num}`);
}

const coolCounter = new Counter();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
