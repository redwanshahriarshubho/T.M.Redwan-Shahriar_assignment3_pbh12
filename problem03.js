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

