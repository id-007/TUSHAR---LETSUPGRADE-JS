console.log('question 1');
//-------------------------------------------------------------------------------------------------\\
let num;

do {
num = prompt("Enter a value in +ve");

}
while
(num < 1);
console.log(`The no. you have entered is ${num}`);

// making array

let list = []; // empty array list[]

for(i=1; i<=num; i++)
{
list.push(i);
} 
console.log(list); 

// for odd number using high order function
 let odd = list.filter(el => el%3==0);
 console.log(`Odd numbers till ${num} are ${odd}`);
  
//array of cubes of filtered numbers
let cube = odd.map(el => {
let result  = Math.pow(el,3);
odd.result = result;
return result;
})

console.log(cube);



