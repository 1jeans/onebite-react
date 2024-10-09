const animal = {
    type: "고양이",
    name: "나비",
    color: "black"
};


animal.age = 2;
animal.name = "까망이";

delete animal.color;

const person = {
    name: "함원진",

    sayHi(){
        console.log("안녕");
    },
};


person.sayHi();
person["sayHi"]();

let name = person.name;

console.log(name);

