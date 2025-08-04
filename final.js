/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var result1 = area / 2;
console.log(result1);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
var result2;
if (money >= 25000) {
    result2 = "Laptop";
} else if (money >= 10000) {
    result2 = "Cycle";
} else {
    result2 = "Chocolate";
}
console.log(result2);

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
var day3;
for (day3 = 1; day3 <= lastDay; day3++) {
    if (day3 % 3 == 0) {
        console.log(day3 + " - medicine");
    } else {
        console.log(day3 + " - rest");
    }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
var result4;
if (fileName[0] == "#") {
    result4 = "Store";
} else if (fileName.indexOf(".pdf") != -1) {
    result4 = "Store";
} else if (fileName.indexOf(".docx") != -1) {
    result4 = "Store";
} else {
    result4 = "Delete";
}
console.log(result4);


/** Problem 05 - ( PH Email Generator ) */
var student = { 
    name: "jhankar", roll: 1014, department: "cse" 
};
//write your code here
var email5 = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(email5);

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
