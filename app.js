function sum(numberOne, numberTwo) {
  //console.log('The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + (numberOne + numberTwo) + '.');
  return (numberOne + numberTwo);
}

function multiply(numberOne, numberTwo) {
  //console.log('The product of ' + numberOne + ' and ' + numberTwo + ' is ' + (numberOne * numberTwo) + '.');
  return (numberOne * numberTwo);
}

function sumAndMultiply(numberOne, numberTwo, numberThree){
  var addTwoValues = sum(numberOne, numberTwo);
  var addThird = sum (addTwoValues, numberThree);
  var productTwoValues = multiply(numberOne, numberTwo);
  var productThird = multiply(productTwoValues, numberThree);
  var arrayOne = [addThird,productThird];
  console.log(numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum to ' + arrayOne[0] + '.');
  console.log('The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + arrayOne[1] + '.');
}

function yell(aString) {
  console.log(aString.toUpperCase() + '!!!!');
  var yellEl = document.getElementById('yellEl');
  yellEl.textContent = aString.toUpperCase() + '!!!!';
}

function sumArray(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log('The numbers ' + arr +  ' have a sum of ' + sum + '.');
  return sum;
}

function multiplyArray(multiply) {
  var product = 1;
  for(var i = 0; i < multiply.length; i++){
    product *= multiply[i];
  }
  console.log('The numbers ' + multiply +  ' have a product of ' + product + '.');
  return product;
}
