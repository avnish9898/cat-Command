let bus={
    wheel:4,
    color:"red",
    honk=function(){
        return "honking bus";
    }
}
//creating ney proerty/key object
bus.capacity=50;
bus.wheel=6;
bus.color=5;

let capacity ="jj";

//accessing object using square bracket with its key name
console.log(bus["capacity"]);

//accessing object using square brack with varibale name
//v
console.log(bus[capacity]);

//acessing object using .key it will search exact capacity key inside bus object
console.log(bus.capacity);
