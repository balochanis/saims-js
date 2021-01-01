var cityName = prompt("Enter the name of your city", "Karachi");

if(cityName === "Karachi")
{
    console.log("Welcome to city of Lights");
}

else
{
    console.log("Your city is something else");
}

var genderInput = prompt("Enter your gender", "male");
genderInput = genderInput.toLowerCase();
if(genderInput === "male")
{
    console.log("Good Morning Sir");
}

else if(genderInput === "female")
{
    console.log("Good Morning Ma'am");
}


//3
var signalColor = prompt("Enter Signal Color", "red");
var message;
if(signalColor === "red")
{
    message = "Must Stop";
}

else if(signalColor === "yellow")
{
    message = "Ready to move";
}

else if(signalColor === "green")
{
    message = "Move now";
}

else
{
    message = ("Signal is something else");
}

console.log(message);

var remainingFuel = +prompt("Enter Remainig fuel (in litres)");
if(remainingFuel < 0.25)
{
    console.log("Please refill the fuel in your car");
}

//5
var a = 4;
if(++a === 5)
{
    console.log("given condition for variable a is true");
    //true
}

var b = 82;

if(b++ === 83)
{
    alert("given condition for variable b is true");
    //false
}

var c = 12;
if(c++ === 13)
{
    alert("condition 1 is true");
    //false

}

if(c === 13)
{
    alert("condition 2 is true");
    //false
}

if(++c < 14)
{
    alert("condition 3 is true");
    //false
}

if(c === 14)
{
    alert("condition 4 is true");
    //true
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === laborCost + materialCost)
{
    alert("The cost equals");
}


if(true)
{
    alert("True");
    //true
}

if(false)
{
    alert("False");
    //false
}

if("car" < "cat")
{
    alert("car is smaller than cat");
    //true
}




//6
var totalMarks = +prompt("Enter Total Marks",300);
var obtainedMarks = +prompt("Enter obtained marks", 200);

var percentage = obtainedMarks / totalMarks * 100;
percentage = percentage.toFixed(2);
var grade;
var remarks;
if(percentage >= 80)
{   
    grade = "A-one";
    remarks = "Excellent";
}

else if(percentage >= 70)
{
    grade = "A";
    remarks = "Good";
}


else if(percentage >= 60)
{
    grade = "B";
    remarks = "You need to improve";
}

else if(percentage < 60)
{
    grade = "Fail";
    remarks = "Sorry";
}


console.log("Total Marks: " + totalMarks);
console.log("Obtained Marks: " + obtainedMarks);
console.log("Percentage: " + percentage);
console.log("Grade: " + grade);
console.log("Remarks: " + remarks);


//7
var randomNum = Math.round(Math.random()) * 10;

console.log(randomNum);

