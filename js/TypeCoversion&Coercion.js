//Tyepe conversion
var demo1=20;
console.log(demo1+" "+(typeof demo1));
demo2=String(demo1)
console.log(demo2+" "+(typeof demo2));


let date=new Date();
console.log(date);

let number=parseInt("123");
console.log(number);

//coercion
let myVar='abcd';
let myVar1=20;
console.log(myVar+myVar1);//number changes to string then string concatenates...