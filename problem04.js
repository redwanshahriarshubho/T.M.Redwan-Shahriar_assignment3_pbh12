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