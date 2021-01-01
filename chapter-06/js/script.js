var a = 10;
document.write("<p>Result: </p>");
document.write("<p>The value of a is: " + a + "</p>");
document.write("<p>................................</p>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

a = ++a;
document.write("<p>The value of ++a is: " + a + "</p>");
document.write("<p>Now the value of a is: " + a + "</p>");
document.write("<br>");
document.write("<br>");

a = a++;


document.write("<p>The value of a++ is: " + a + "</p>");
document.write("<p>Now the value of a is: " + a + "</p>");
document.write("<br>");
document.write("<br>");


a = --a;
document.write("<p>The value of --a is: " + a + " </p>");
document.write("<p>Now the value of a is: " + a + "</p>");
document.write("<br>");
document.write("<br>");

a = a--;
document.write("<p>The value of a-- is: " + a + " </p>");
document.write("<p>Now the value of a is: " + a + "</p>");




//2
// var a = 2, b = 1;

// --a - --b + ++b + b--;




//3
var user = prompt("Enter Your name?", "Anis");
console.log("Welcome " + user);

//5
var tableInput = +prompt("Enter Table Number to Print Table");
console.log(tableInput);
if(tableInput == 0)
{
    tableInput = 5;
}

for(var i=1; i <=10; i++)
{
    document.write("<p>" + tableInput + " x " + i + " = " + tableInput * i + "</p>");
}



//6
var englishMarks = +prompt("Enter English Obtained Marks: ",54);
var mathMarks = +prompt("Enter Math Obtained Marks: ", 54);
var urduMarks = +prompt("Enter Urdu Obtained Marks: " ,48);

var totalMarks = 100;

document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>Engish</td><td>" + totalMarks +"</td><td>" + englishMarks + "</td><td>" + englishMarks * totalMarks / 100 + "%</td></tr><tr><td>Math</td><td>" + totalMarks + "</td><td>" + mathMarks + "</td><td>" + mathMarks * totalMarks / 100 + "%</td></tr><tr><td>Urdu</td><td>" + totalMarks + "</td><td>" + urduMarks + "</td><td>" + (urduMarks * totalMarks / 100) + "%</td></tr><tr><td></td><th>" + totalMarks * 3 + "</th><th>"+ (urduMarks + mathMarks + englishMarks) + "</th><th>" + ((urduMarks + mathMarks + englishMarks) * 100 / 300) + "</th></tr></table>");


