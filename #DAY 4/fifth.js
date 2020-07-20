console.log("Question 5")

//---------------------------------------------------------------------------------------------------\\

let sales = prompt("Enter your sales of the year");
let comm;
if(sales > 0 && sales <= 5000 ) {

    comm = sales / 100 * 2;
    console.log(`your sales is ${sales} and commission is ${comm}`);
}
if(sales >= 5001 && sales <= 10000 ) {
    comm = sales / 100 * 5;
    console.log(`your sales is ${sales} and commission is ${comm}`);

}
if(sales >= 10001  && sales <= 20000 ) {
    comm = sales / 100 * 7;
    console.log(`your sales is ${sales} and commission is ${comm}`);

}
if(sales >= 20000) {
    comm = sales / 100 * 10;
    console.log(`your sales is ${sales} and commission is ${comm}`);
}



