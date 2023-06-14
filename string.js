// console.log("the munna");

// let a = "Munna";
// let b = 'Banana\n';
// let c = "it's me";//to use quotes inside but different from surroundings
// let d = 'it"s me';//to use quotes inside but different from surroundings

// console.log(a,b,c,d);

// //length is used to count no of characters in the string
// let l =  a.length;
// console.log(l);

// // the backslash '\' turns special characters like  ' ; "" into string 
// let e = "bolo \"radhe\"";
// console.log(e);

// // document.getElementById("papa").innerHTML =
// // "meunna burcha\'tta";

// //you can break up a line using backslash
// let anu = "ranja \
// ";
// console.log(anu);

// //use string addition

// let an = "hello" +
// "bakra";
// console.log(an);

// console.log(typeof(an));//here it is string

// //convert string into object using the keyword new

// let y = new String("heya hetu");
// console.log(y);
// console.log(typeof(y));

// let arj = "rama rama";
// let ashoka = arj.slice(0,6);
// console.log(ashoka);

// console.log("munna gupta\v");//this doesnt work shiowing question mark 
// console.log("hlo")


// //checking string and object are equal or not

// let x = "aryan";
// let y = new String("aryan");
// //here it talks about stored value
// if(x == y){
//     console.log("ka re bauwa");

// }else{
//     alert("gand mara");
// }
// console.log(x[0]);

// let z = new String("aryan ,12,9865");
// console.log(z);


// //it talks about typeof i.e string and object
// if(x === y){
//     prompt(rja);
// }else{
//     console.log("galse");
// }//returns false

// //check object == object
// //object in js cannot be compared so it always is false
// let a = new String("kahaal");
// let b = new String("kahaal");

// if(a == b){
//     console.log("thik ba");
// }else{
//     console.log("false");
// }

// if(a === b){
//     console.log("true");
// }else{
//     console.log("galat ba");
// }


//String Methods

// let a = "raja , kuta , kala ,wyuha , prarambha";
// let b = a.slice(0,4);//if give 4 it takes upto 3
// console.log(b);
// //remove second parameter
// let c = a.slice(5);//this returns all starting from index 5 til last
// console.log(c);

// //negative parameter

// let d = a.slice(-5);//it will count 1 to 5 from last and return 
// console.log(d);

// // paassing both negative parameters

// let e = a.slice(-8,-2);
// console.log(e);




//String substring() is same as slice difference is start and end values less than 0 are treated as 0

// let m = "abvdefghki lmnopqrstuvwxyz";
// let n = m.substring(0,3);
// console.log(n);
// let o = m.substring(5);
// console.log(o);// left 0 to 4 and print all
// let p = m.substring(-1,4);// -1 becomes 0 and upto 3 printed
// console.log(p);

// let q = m.substring(-1);
// console.log(q);




 //substr() is similar to slice but second parameter defines length of extracted part

//  let str = "apple ball cat dog ram balram hari";
//  let m = str.substr(2,5);//it start from index 2 and print 5 digits
//  console.log(m);

//  //remove second parameter 
//  let n = str.substr(5);//from index 5 till last printed
//  console.log(n);
// //if first parameter is negative 
// let o = str.substr(-4);//from last count 1 to 4 and print
// console.log(o);





// //Replacing String Content
// let txt = "Habibi Come to Nepal Come";
// let newtext = txt.replace("Com","go");
// console.log(newtext);

// //to remove problem of case sensitive use /i flag

// let n = txt.replace(/COME/i ,"go");
// console.log(n);

// // to replace all matching words use /g flag

// let o = txt.replace(/Come/g,"go");
// console.log(o);

//now to remove both lower and upper use replaceAll()
/*
var t = "khana Khana Khana khana";
t = t.replaceAll("khana","gana");
t = t.replaceAll("Khana","Gana");
 console.log(t);

 //regular expression requires  global flag(g)

 let m = "Hello kaun Ham Hello kaun Ham";
 m = m.replaceAll(/Hello/g,"Baao");
 m = m.replaceAll(/kaun/g,"baap");
 m = m.replaceAll(/Ham/g,"ban");
//  console.log(m);

//  //toUpperCase and toLowerCase method

//  m = m.toUpperCase();
//  console.log(m);

//  m = m.toLowerCase();
//  console.log(m);




//  //concat in js

//  let t1 = "mummy";
//  let t2 = "papa";
//  let t3 = t1.concat(" ",t2," ","i love you");
//  console.log(t3);

// let t4 = "hello" + " " + "world";
//  console.log(t4);

//  t4 = "world".concat(" ","papa");
//  console.log(t4); 



// /*
// //trim method remove white spaces from the string

// let t = "                           how are you                           ";
// console.log(t);
// t = t.trimEnd();//removes whitespaces from end sides
// console.log(t);
// t = t.trim();//removes whitespaces from both sides
// console.log(t);
// t = t.trimStart();
// console.log(t);

// */


// //pad method();to pad from start and end

// let t = "5";
// let padded = t.padStart(4,"10");//pad a string with 10 until the string is of length 4
// console.log(padded);

// //padStart() method is a  string method
// //to pad a number convert the number to string

// let num = 5;
// let r = num.toString();
// let pad = r.padStart(5,"yara");
// console.log(pad);
//  pad = r.padEnd(3,"0");//add 0 at end of r until it's length is 3
//  console.log(pad);

 


// //Extracting String characters
// //charAt(position) , charCodeAt(position) , Property access []


// let te = "BOLO RADHE RAD\'HE";
// let char = te.charAt(5);//it returns the character at the fifth index
// console.log(char);

// let c = t.charCodeAt(5);//this returns the unicode at the given index from 0 to 65535
// console.log(c);

// let d = t[10];//access string using index but they are not array if no character then undefined is  returned
// console.log(d);





// // converting  a string into array
// //split() method
//  te = "i am papa's favaourite , mama's favourite, and i love likhita";
// p = te.split(",");//this will separate the string after commas and create an array
// console.log(p);//array
// console.log(p[2]);//array 2
// m = te.split(" ");//this will separate based on spaces and create an array
// console.log(m);
// console.log(m[5]);

// n = te.split("|");
// console.log(n);//here it searches for | but it is not there array is created and has 1 element
// console.log(n[0]);

// s = te.split("");//this will return an array with single charcaters
// console.log(s);




//String Search
/*
let t = "Who am i and who is he over there in the mirror who";
let index = t.indexOf("who");//this returns the index of first occurence of w
console.log(index);

let i =  t.lastIndexOf("w");//index of last occurence is printed
console.log(i);
console.log(t[48]);

//if the text is not found indexOf and lastIndexOf method returns -1

let w = t.indexOf("z");
console.log(w);

//both method accepts second parameter as start positon to search
*/
/*
let m = "chama are chama rahej radhe wa w w aa ";
console.log(m.indexOf("c",5));//this start search from index 5
console.log(m.lastIndexOf("r",23));//this start search from index 10 and goes to begining

console.log(m.search("chama"));
console.log(m.search(/chama/));

//diff between is search cannot take a second start position and indexOf method cannot take powerful search values


// */
// //Javascript String match()

// //match returns an array
// var m = "CHAMA chama  ama vahm karo manusya rakhasa";
// console.log(m.match("ama"));
// console.log(m.match(/ama/));

// console.log(m.match(/ama/g));//global search IF g is not included then onlu first match is returned

// console.log(m.match(/ama/gi));


// //matchAll()
// var ma = "CHAMA chama  ama vahm karo manusya rakhasa";

// const m = ma.matchAll("ama");//it brings all matching strings in string iterator
// console.log(Array.from(m));//and can be checked this way Array.from(iterator)
// const n = ma.matchAll(/AMA/g);
// console.log(Array.from(n));



// //includes() method returns true if a string contains a specified value otherwise false

// let text = "i love you someone";
// t = text.includes("love");
// console.log(t);
// //start position 

// s = text.includes("love" ,9);
// console.log(s);//this returns false it checks from 9 index

/*

 //startsWith() this true if string begins with value or false

 let text = "i love someone";
 s = text.startsWith("i");
 console.log(s);//true
 t = text.startsWith("love");
 console.log(t);//false
 //start position can be applied
 
u = text.startsWith("love" ,2)//true
v = text.startsWith("someone",7)//true
console.log(u,v);

// */
// //endsWith()
// let text = "i love someone";
// w = text.endsWith("e");
// console.log(w);
// w = text.endsWith("someone");
// console.log(w);
// x = text.endsWith("s");
// console.log(x);

// //first 5 characters end with e /love or not

// y = text.endsWith("love",6);//including null
// console.log(y);



//with template literal you can use multiline strings and single double quotes also

let text = `
the lion
came in 
his house`
console.log(text);

//interpolation means insert something different

let firstName = "Munna";
let lastName = "loves";

let t = `Welcome him cz ${firstName},${lastName}`;

console.log(`hello lovers ${firstName}`);
console.log(t);

let price = 10;
let vat = 2.57;
let total = `Total  is : ${price * (1+vat).toFixed(20)}`;
console.log(total);




