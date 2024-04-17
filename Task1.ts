import inquirer from "inquirer";

let correctguess = 0;
let Attempts = 5;
let playCount = 0;

for (let i = 0; i < Attempts; i++) {
  let randomnumb = Math.floor(Math.random() * 100 + 1);
  const answer = await inquirer.prompt([
    { name: "Number", type: "number", message: "Enter your Number: " },
  ]);
  if (answer.Number <= 100) {
    if (answer.Number === randomnumb) {
      console.log("Your Guess was Correct");
      correctguess++;

      console.log(randomnumb);
    } else if (answer.Number < randomnumb) {
      console.log("Your guess is too low");
    } else if (answer.Number > randomnumb) {
      console.log("Your guess is too High");
    } else {
      console.log("Oops! Your Guess was wrong");
    }
  } else {
    console.log("Number Should be less then 100");
    break;
  }
  if (i < Attempts - 1) {
    const answer2 = await inquirer.prompt([
      {
        name: "status",
        type: "confirm",
        message: "Do you want to Play again?",
        default: false,
      },
    ]);
    if (answer2.status) {
      playCount++;
    } else {
      break;
    }
  }
}

console.log("\n===========");
console.log("Your Score:");
console.log("===========");

console.log(
  "Out of " + Attempts + " Attempts, you have won " + correctguess + " times"
);
