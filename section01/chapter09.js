let num = 10;

if( num >= 10){
    console.log("참참참")
}else if(num >= 5){
    console.log("5");
}



let animal = "cat";

switch(animal){
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("개");
        break;
    }
    case "bear":{
        console.log("곰");
        break;
    }
    case "snake":{
        console.log("뱀");
        break;
    }
    case "tiger":{
        console.log("호랑이");
        break;
    }
    default:{
        console.log("그냥 동물");
    }
}

