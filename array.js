// console.log("hello i am here");

//objects
// let employee = {
//     name: "harry",
//     salary: 10,
//      channel : "not",
//     lelawati: "bhaskaracharya",
//  }
// console.log(employee);
//  console.log(employee.name);




//arrays
// let names = [1,2,3,"Munna",undefined,null];
// let name = new Array(81,62,53,"Munna",undefined,null);
// console.log(names);
// console.log(names[0]);
// console.log(name.length);
// name = name.sort();

// name.push("this is pushed");
// name.push(12);
// name.push(133,1345);
// name.push("arjuna",340,5050,"krishna");
// name = name.sort();
// console.log(name);
// names.push("Michael");
// console.log(names);



// function myFunction(){
//     console.log("hello Munna");
//     return "munna";
// }

// let myCars = [2,56,1112,"Randsa",undefined];

// var myArray = [5];

// myArray[0] = Date.now();
// myArray[1] = myFunction();
// myArray[2] = myCars;

// console.log(myArray);

//  Javascript Date Object

// let date = new Date();//current date
// console.log(date);

// let ymdate = new Date(2000,5,4);//year month date here month is 6
// console.log(ymdate);

// const d = new Date("October 13 2014 11:13:00");//string pass in date() constructor
// console.log(d); 

// let sdate = new Date("2022-5-4");//date string here month is 5
// console.log(sdate);

// let mdate = new Date(19,1,14);//this will take 12 as century
// console.log(mdate);


// let ymdhmsdate = new Date(2001,9,27,5,20,60);//year month date hour minute seconds ms
// console.log(ymdhmsdate);

// //miliseconds zero time is jan 01 1970 00:00:00 utc

// let milidate = new Date(10000);//zero date + miliseconds passed
// console.log(milidate);

// //setting date object

// let mydate = new Date();
// mydate.setFullYear(2010,0,10);
// console.log(mydate);

// //we set date object to be 5 days into the future

// let myDate= new Date();
// myDate.setDate(myDate.getDate()+5);
// console.log(myDate);




let s = new Date(2001,5,4) ;
 s.setDate(s.getDate()+5);
console.log(s);

let m = new Date(2023,2,17);
let n = new Date();
if(m > n){
    alert("this is less");
}else{
    alert("this is more");
}



