"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Student Course Registration System
//1.course information:code,title,description
//2.student info:id,nname,registered courses
//3.available courses
//4.allow students to register for courses from available options
//5. available slots
var inquirer_1 = require("inquirer");
var coursenumber = 0;
console.log("Student Course Registration System");
//1.
console.log("\nCourses Information:  ");
console.log("======================");
console.log("\ncourse 1");
console.log("Code:401");
console.log("Title:Differential Equation");
console.log("Description: ");
console.log("----------------");
console.log("\ncourse 2");
console.log("Code:402");
console.log("Title:Thermodynamics");
console.log("Description: ");
console.log("----------------");
console.log("\ncourse 3");
console.log("Code:403");
console.log("Title:Astrophysics");
console.log("Description: ");
console.log("----------------");
console.log("\ncourse 4");
console.log("Code:404");
console.log("Title:Aerodynamics");
console.log("Description: ");
console.log("----------------");
console.log("\ncourse 5");
console.log("Code:405");
console.log("Title:Calculus");
console.log("Description: ");
console.log("----------------");
console.log("\ncourse 6");
console.log("Code:406");
console.log("Title:Atmoshpheric Physics");
console.log("Description: ");
console.log("----------------");
console.log("\ncourse 7");
console.log("Code:407");
console.log("Title:Astronomy");
console.log("Description: ");
console.log("----------------");
//2. Get student details
var details = await inquirer_1.default.prompt([
    {
        name: "student",
        type: "string",
        message: "Enter your name: ",
    },
    {
        name: "id",
        type: "input",
        message: "Enter your ID: ",
    },
]);
//3. && 4. Course selection
console.log("\nSelect any 5 Courses: ");
var selectedsubject = [];
while (selectedsubject.length < 5) {
    coursenumber++;
    var answer = await inquirer_1.default.prompt([
        {
            name: "Available_Courses",
            message: "Course no# ".concat(coursenumber, ": "),
            type: "list",
            choices: [
                "Differential Equation",
                "Thermodynamics",
                "Astrophysics",
                "Aerodynamics",
                "Calculus",
                "Atmospheric Physics",
                "Astronomy",
            ],
        },
    ]);
    if (!selectedsubject.includes(answer.Available_Courses)) {
        selectedsubject.push(answer.Available_Courses);
    }
    else {
        console.log("You've already selected this course. Please select another.");
        coursenumber--;
    }
}
//5. Slot selection
var selected = await inquirer_1.default.prompt([
    {
        name: "slots",
        type: "list",
        message: "Select your slot carefully it is unchangable: ",
        choices: [
            "Morning(9am-1pm)",
            "Evening(4pm-9pm)"
        ]
    }
]);
console.log("\nDear " + details.student + ", you have selected the courses given below:");
console.log("your selected courses:");
console.log(selectedsubject);
console.log("And Your Selected Slot is: " + selected.slots);
var answer2 = await inquirer_1.default.prompt([{
        name: "confirmation",
        type: "confirm",
        message: "Do you agree with these Details",
        default: false,
    }]);
if (answer2.confirmation) {
    console.log("Your registration has been Successful!");
}
else {
    var answer3 = await inquirer_1.default.prompt([{
            name: "drop",
            type: "confirm",
            message: "Do you want to drop courses?",
            default: false,
        }]);
    if (answer2.drop) {
        console.log("your registration has been successful.");
    }
    else {
        console.log("Your registration has been cancelled");
    }
}
