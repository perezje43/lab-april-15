function sum(numberOne, numberTwo) {
  var mySum = (numberOne + numberTwo);
  var mySumAgain = document.getElementById('sumValues');
  console.log('The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + mySum + '.');
  mySumAgain.textContent = 'The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + mySum + '.';
  return (numberOne + numberTwo);
}

function multiply(numberOne, numberTwo) {
  var myMultiply = (numberOne * numberTwo);
  var myMultiplyAgain = document.getElementById('productValues');
  console.log('The product of ' + numberOne + ' and ' + numberTwo + ' is ' + myMultiply + '.');
  myMultiplyAgain.textContent = 'The product of ' + numberOne + ' and ' + numberTwo + ' is ' + myMultiply + '.';
  return (numberOne * numberTwo);
}

function sumAndMultiply(numberOne, numberTwo, numberThree){
  var sumOfThree = document.getElementById('sumOfValues');
  var productOfThree = document.getElementById('productOfValues');
  var sumThree = (sum(numberOne,numberTwo) + numberThree);
  var productThree = (multiply(numberOne,numberTwo) * numberThree);
  var arrayOne = [sumThree,productThree];
  console.log(numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum to ' + arrayOne[0] + '.');
  console.log('The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + arrayOne[1] + '.');
  console.log(sumThree);
  sumOfThree.textContent = numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' sum to ' + arrayOne[0] + '.';
  productOfThree.textContent = 'The numbers ' + numberOne + ' and ' + numberTwo + ' and ' + numberThree + ' have a product of ' + arrayOne[1] + '.';
  return arrayOne;
}

function sumArray(arr){
  var mySumArray = document.getElementById('sumOfArrays');
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log('The numbers ' + arr + ' have a sum of ' + sum + '.');
  mySumArray.textContent = 'The numbers ' + arr + ' have a sum of ' + sum + '.';
  return sum;
}

function multiplyArray(multiply) {
  var myMultiplyArray = document.getElementById('multiplyOfArrays');
  var product = 1;
  for(var i = 0; i < multiply.length; i++){
    product *= multiply[i];
  }
  console.log('The numbers ' + multiply +  ' have a product of ' + product + '.');
  myMultiplyArray.textContent = 'The numbers ' + multiply +  ' have a product of ' + product + '.';
  return product;
}
