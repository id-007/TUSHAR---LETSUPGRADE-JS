let quoter = [
    ' Be happy with what you have , Be Exicted about what you want !!! ' ,
    'Be thankful for all the trouble you don\'t have ' ,
    'Positivity is the key of happiness' ,
    'The hardest thing for people to see is themselves' ,
    'Happiness is not by Choice its by choice' ,
]

function Quote_dis() {
    let random_sen = Math.floor(Math.random() * (quoter.length));
    document.getElementById('DisplayQuote').innerHTML = quoter[random_sen];
}