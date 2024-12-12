// Question_01


function power(a, b) {
    if (b === 0) {
        return 1;
    }
    if (b < 0) {
        return 1 / power(a, -b);
    }
    return a * power(a, b - 1);
}
document.write("2 raised to the power of 3 is: " + power(2, 3) + "<br>");
document.write("5 raised to the power of 0 is: " + power(5, 0) + "<br>");
document.write("2 raised to the power of -2 is: " + power(2, -2) + "<br>");



// Question_02

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; 
    } else {
        return false; 
    }
}
var year = prompt("Enter a year:"); 
year = parseInt(year); 
if (isLeapYear(year)) {
    document.write(year + " is a leap year.<br>");
} else {
    document.write(year + " is not a leap year.<br>");
}


// Question_03


function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function calculateArea(a, b, c) {
    var S = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}
var a = parseFloat(prompt("Enter the length of side a:"));
var b = parseFloat(prompt("Enter the length of side b:"));
var c = parseFloat(prompt("Enter the length of side c:"));
if (a + b > c && a + c > b && b + c > a) {
    var area = calculateArea(a, b, c);
    document.write("The area of the triangle is: " + area.toFixed(2) + "<br>");
} else {
    document.write("The given sides do not form a valid triangle.<br>");
}



// Question_04

function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}
function calculatePercentage(marks1, marks2, marks3, totalMarks) {
    var totalObtained = marks1 + marks2 + marks3;
    return (totalObtained / totalMarks) * 100;
}
function mainFunction() {
    var marks1 = parseFloat(prompt("Enter marks for subject 1:"));
    var marks2 = parseFloat(prompt("Enter marks for subject 2:"));
    var marks3 = parseFloat(prompt("Enter marks for subject 3:"));
    var totalMarks = 300;
    var average = calculateAverage(marks1, marks2, marks3);
    var percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);
    document.write("The average marks are: " + average.toFixed(2) + "<br>");
    document.write("The percentage is: " + percentage.toFixed(2) + "%<br>");
}
mainFunction();

// Question_05

function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
var myString = "hello world";
var charToFind = "o";
var index = customIndexOf(myString, charToFind);
document.write("The index of '" + charToFind + "' is: " + index + "<br>");



// Question_06

function removeVowels(sentence) {
    var vowels = "aeiouAEIOU";
    var result = "";
    for (var i = 0; i < sentence.length; i++) {
        if (vowels.indexOf(sentence[i]) === -1) {
            result += sentence[i];
        }
    }
    return result;
}
var sentence = prompt("Enter a sentence (max 25 characters):");
var newSentence = removeVowels(sentence);
document.write("Sentence without vowels: " + newSentence + "<br>");


// Question_07

function countConsecutiveVowels(sentence) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    for (var i = 0; i < sentence.length - 1; i++) {
        var currentChar = sentence[i];
        var nextChar = sentence[i + 1];
                switch (true) {
            case (vowels.indexOf(currentChar) !== -1 && vowels.indexOf(nextChar) !== -1):
                count++;
                break;
            default:
                break;
        }
    }
        return count;
}
var sentence = prompt("Enter a sentence:");
var result = countConsecutiveVowels(sentence);
document.write("Number of consecutive vowels: " + result + "<br>");


// Question_08

function convertToMeters(km) {
    return km * 1000;
}
function convertToFeet(km) {
    return km * 3280.84;
}
function convertToInches(km) {
    return km * 39370.1;
}
function convertToCentimeters(km) {
    return km * 100000;
}
function mainFunction() {
    var km = parseFloat(prompt("Enter the distance between the cities in kilometers:"));
    var meters = convertToMeters(km);
    var feet = convertToFeet(km);
    var inches = convertToInches(km);
    var centimeters = convertToCentimeters(km);
    document.write("Distance in meters: " + meters + " m<br>");
    document.write("Distance in feet: " + feet + " ft<br>");
    document.write("Distance in inches: " + inches + " in<br>");
    document.write("Distance in centimeters: " + centimeters + " cm<br>");
}
mainFunction();


// Question_09

function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12; 

    if (hoursWorked > regularHours) {
        var overtimeHours = hoursWorked - regularHours;
        var overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
    } else {
        return 0;
    }
}
function mainFunction() {
    var hoursWorked = parseInt(prompt("Enter the total hours worked by the employee:"));
    var overtimePay = calculateOvertimePay(hoursWorked);
    if (overtimePay > 0) {
        document.write("The overtime pay is Rs. " + overtimePay + "<br>");
    } else {
        document.write("No overtime pay as the employee worked 40 hours or less.<br>");
    }
}
mainFunction();


// Question_10


function calculateNotes(amount) {
    var notes100 = 100;
    var notes50 = 50;
    var notes10 = 10;
    var num100Notes = Math.floor(amount / notes100);
    amount = amount % notes100; 
    var num50Notes = Math.floor(amount / notes50);
    amount = amount % notes50; 
    var num10Notes = Math.floor(amount / notes10);
    return {
        num100Notes: num100Notes,
        num50Notes: num50Notes,
        num10Notes: num10Notes
    };
}
function mainFunction() {
    var amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));
    var amount = amountInHundreds * 100;
    var notes = calculateNotes(amount);
        document.write("100 rupee notes: " + notes.num100Notes + "<br>");
    document.write("50 rupee notes: " + notes.num50Notes + "<br>");
    document.write("10 rupee notes: " + notes.num10Notes + "<br>");
}
mainFunction();

