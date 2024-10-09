function main(value){
    value();

}

main(() => {
    //console.log("i am sub");
});


//2. callback 

function repeat(count, callback){
    for(let idx = 1; idx<= count; idx++){
        callback(idx);
    }
}

//화살표 함수와 콜백함수 사용해서 코드 간결화
repeat(5,  (idx) => {
    console.log(idx * 1);
}); 
repeat(5, (idx) => {
    console.log(idx * 1);
}); 
repeat(5, (idx) => {
    console.log(idx * 1);
}); 
