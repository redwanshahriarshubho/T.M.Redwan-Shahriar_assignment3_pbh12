/** Problem 06 : (Current Salary ) */
var experience = 30;
var startingSalary = 45000;
//write your code here
var currentSalary6 = startingSalary;
var year6;
for (year6 = 1; year6 <= experience; year6++) {
    currentSalary6 = currentSalary6 + (currentSalary6 * 5 / 100);
}
var finalSalary6 = currentSalary6.toFixed(2);
console.log(finalSalary6);