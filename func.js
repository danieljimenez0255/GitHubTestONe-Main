
let resultDisplay = document.getElementById("displayResult");
let numberOne = prompt("Enter your first Number: ");
let numberTwo = prompt("EnterSecondNumber: ");
function multiplyNums(a, b){
   let multipliedNums = a * b;
   return multipliedNums;
}

resultDisplay.innerHTML = "The value of the numbers multipled is: " + multiplyNums(numberOne, numberTwo);