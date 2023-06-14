// let x = 100/"apple";
// console.log(x);

// let y = 100/"10";
// console.log(isNaN(y));

// //infinity
// let num =2;
// while(num != Infinity){
//     num = num * num;
// }
// console.log(num);

// console.log(typeof(Infinity));

// //hexadecimal

// let a = 0xff;
// console.log(a);

// let n = 255;
// console.log(n.toString(10));//use toString function to convert a number to required base

// //js numbers as object
// let p =123;//number
// let o = new Number(123);//object
// //compare
// if (p == o){
//     console.log(o.Number);
// }



//bigint

// to create a large number or BigInt use BigInt() function or append n at last

// let a = 123n;
// let b = BigInt(2345);
// console.log(a+b);
// //arithmetic between number and bigint is not allowed
// let c = 214;
// //convert bigint to number

// let d = Number(a)/c;
// console.log(d);



//MAX _SAFE_INTEGER
// let e = Number.MAX_SAFE_INTEGER;
// let f = Number.MIN_SAFE_INTEGER;
// console.log(e,f);

// //isInteger and isSafeInteger

// let a = Number.isInteger(20);
// let b = Number.isInteger(1.2585);
// console.log(a,b);

// let c = Number.isSafeInteger(1234567890123456);
// console.log(c);
// let d = Number.isSafeInteger(9007199254740992);
// console.log(d);



//Number Methods js

//toString - this returns a number as a string

// let x = 123;
// y = x.toString();
// console.log(y);//all three are same
// console.log((123).toString());
// console.log((100+23).toString());

// //toExponential() this returns a string in exponent form

// let a = 1.2353;
// console.log(a.toExponential());
// console.log(a.toExponential(2));
// console.log(a.toExponential(5));
// let b = 123456;
// console.log(b.toExponential(5));;
// console.log(b.toExponential(6));;

// //toFixed() this returns a string with specified number of decimals

// console.log(a.toFixed(2));
// console.log(b.toFixed(3));
// console.log(a.toFixed(0));

// //toPrecision returns a string with specified length

// console.log(a.toPrecision());
// console.log(a.toPrecision(2));
// console.log(a.toPrecision(3));//1.24
// console.log(a.toPrecision(4));//1.235

// //valueOf() this returns number as number
// let z = new Number(123);
// console.log(z.valueOf());//mainly used to convert number object as value

// //convert variable to a number

// //Number() returns a number converted from its argument
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(Number("10"));//10
// console.log(Number(" 10"));//10 string to number
// console.log(Number("10.33"));//10.33
// console.log(Number("10,33"));//10.33
// console.log(Number("10 33"));//10.33
// console.log(Number("John"));//10.33

// //number() to convert date to a number

// console.log(Number(new Date()/86400));//miliseconds since 1970-1-1

// //parseInt() this parses a string returns whole number spaces allowed and first number is returned

// console.log(parseInt("-10"));//-10
// console.log(parseInt("-10.33"));//-10
// console.log(parseInt("10"));//10
// console.log(parseInt("10.33"));//10
// console.log(parseInt("10 20 30"));//10
// console.log(parseInt("10 years"));//10
// console.log(parseInt("years 10"));//NaN
// console.log(parseInt("munna"));//Nan

// //parseFloat()  parses a string returns a number spaces are allowed only first number is returned

// // console.log(parseFloat("-10"));//-10
// // console.log(parseFloat("-10.33"));//-10.33
// // console.log(parseFloat("-10 33"));//-10
// // console.log(parseFloat("-10 210 320"));//-10
// // console.log(parseFloat("10.33  years"));//10.33
// // console.log(parseFloat("years 10.33"));//NaN

//  //Number Properties
//  let x = Number.EPSILON;//THis returns difference between 1 and smallest no great than 1
//  console.log(x);
//  console.log(Number.EPSILON);

//  //max value property
//  console.log(Number.MAX_VALUE);
//  console.log(Number.MAX_SAFE_INTEGER);
//  console.log(Number.MIN_VALUE);
//  console.log(Number.POSITIVE_INFINITY);
//  console.log(Number.NEGATIVE_INFINITY);


//  //ARRAY TO STRING
//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());


function func(x){
    console.log(typeof x,arguments.length);
}
func();
func(7);
func("1","2","3");

var x =2;
var y ="2";
document.write(x == y);
document.write(x ===y);