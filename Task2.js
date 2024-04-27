//Student Grade Calculator
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "Subject1",
        type: 'number',
        message: "Enter Your Astrophysics Marks: "
    },
    {
        name: 'Subject2',
        type: "number",
        message: 'Enter You Thermodynamics Marks: '
    },
    {
        name: 'Subject3',
        type: "number",
        message: 'Enter You Atmospheric Physics Marks: '
    }, {
        name: 'Subject4',
        type: "number",
        message: 'Enter You Aerospace Marks: '
    }, {
        name: 'Subject5',
        type: "number",
        message: 'Enter You Calculus Marks: '
    }]);
let Sum = answer.Subject1 + answer.Subject2 + answer.Subject3 + answer.Subject4 + answer.Subject5;
let Avgpercentage = Sum / 5;
let Grade = "";
if (Avgpercentage >= 80) {
    Grade = "A+";
}
else if (Avgpercentage < 80 && Avgpercentage >= 70) {
    Grade = 'A';
}
else if (Avgpercentage < 70 && Avgpercentage >= 60) {
    Grade = 'B';
}
else if (Avgpercentage < 60 && Avgpercentage >= 50) {
    Grade = 'C';
}
else {
    console.log("You are Fail!");
}
console.log("\n====================");
console.log("Your Result Report:");
console.log("=====================");
console.log("\nTotal Marks: " + Sum);
console.log("Average Percentage: " + Avgpercentage);
console.log("Your Grade is " + Grade);
