
function string2(){
    let string = '121';
let reverse =    string.split("").reverse().join("");
if (string==reverse){
    console.log("its palindrome");
}else{
    console.log("its not palindrome")
}
}

string2();