// for count
let txt1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt1.length);

// for search
let txt2 = "Red riding hood ates the red apple";
console.log(txt2.search('Red'));

//for indexing
let txt3 = "little red riding hood climb over the tree";
let txt4 = txt3.indexOf("ri");
console.log(txt4);

//for  indexing with 2 values
let txt5 = "I live in new delhi in south delhi";
let txt6 = txt5.indexOf("in",25);
console.log(txt6);

//for slicing
let txt7 = "Hey i am gonna slice you down";
console.log(txt7.slice(14));
console.log(txt7.slice(14,20));

//for substring
let txt8 = "I am learning jscript";
let txt9 = txt8.substr(12);
console.log(txt9);

//for replace
let txt10 = "i am a js developer";
let txt11 = txt10.replace('js' , 'javascript');
console.log(txt11);

// //for replaceall [NOT WORKING - DOUBT !!!]
// let txt12 = "my name is tushar and tushar is web developer"
// console.log('my name is tushar and tushar is web developer'.replaceAll(/tushar/g,'vikas'));


// ARRAYS

// for length
let arr1 = ['AB' , 'CD' , 'EF' , 'GH'];
console.log(arr1);
arr1.length;

//acessing last element
let arr = ['mongoDB', 'Mysql' , 'Oracle' ,'MS SQL Server'];
console.log(arr[arr.length-1]);

//accessing 1st element
console.log(arr[arr.length, 1]);
console.log(arr.sort());

//change an element
 arr[0] = 'PostgreSQL';
 console.log(arr);

 //splice an element
 console.log(arr.splice(0 ,2 , "MS access" , "IBM DB2"  ));




