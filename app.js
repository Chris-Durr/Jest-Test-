// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
// DOLLAR A YEN  
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 106.6;
    //return the yen value
    return Number (valueInYen.toFixed(1));
}
// YEN A POUND  
const fromYenToPound = function(valueInYens){
    // convert the given valueInYens to pound
    let valueInPound = valueInYens * 0.0062;
    //return the pound value
    return valueInPound;
}




// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };