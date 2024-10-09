let obj1= new Object();
let obj2= {};


let person = {
    name : "함원진",
    age : 27,
    hobby: "헬스",
    job: "Developer",
    extra: {},
    10 : 20,
    "Like cat" : true,
}; 

let name = person.name;
let age = person["age2"];

let property = "hobby";
let hobby = person[property];


person.job = "Developer";
person["fb"] = "숙주";


delete person.job;
delete person.fb;


let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1, result2);