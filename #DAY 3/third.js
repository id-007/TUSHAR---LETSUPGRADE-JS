console.log("Question 3");
//grading using if else statemenet
let num = prompt("enter your marks" , 0);
// console.log(`Your got ${num} marks`);

// if (num >= 50 && num <= 60)
// {
//     console.log(`You got ${num} & D Grade`);
// }
// else if(num > 60 && num <=70)
// {
//     console.log(`You got ${num} & C Grade`);
// }
// else if(num > 70 && num <=80)
// {
//     console.log(`You got ${num} & B Grade`);

// }
// else if(num > 80)
// {
//     console.log(`You got ${num} & A Grade`);

// }
// else {
//     console.log(`You got ${num} & E Grade`);
// }



// using switch
switch (true) {
    case (num >= 50 && num < 65) : console.log(`You got ${num} marks and C Grade`);
                                    break;

    case (num >=65 && num < 80) : console.log(`You got ${num} and B Grade`)  ;  
                                    break;

    case (num >= 80) : console.log(`You got ${num} and A Grade`);    
    break;

    default: console.log(`you got failed`);
        break;
}