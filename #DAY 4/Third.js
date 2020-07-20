console.log("Question 3");
//------------------------------------------------------------------------------------------------\\


//Creating an array
let ShoppingList = [ "soap" , "toothbrush" , "scrub" , "towel" ,"detergent" ]
console.table(ShoppingList);

//updating with new items
ShoppingList.push("Fruits" , "veggies" , "screwdriver" , "facemask");
console.table(ShoppingList);

//copying the the updated array to a new array
let ShoppingBasket = Array.from(ShoppingList);
console.table(ShoppingBasket);