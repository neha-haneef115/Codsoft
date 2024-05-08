//Quiz Application with time
import inquirer from "inquirer";
import { timeout } from "rxjs";
let total_question: number = 5;
let result = " ";
let totalcorrectanswer=0;
let wrong=0

  const answer1 = await inquirer.prompt([
    {
      name: "Q1",
      type: "list",
      message: "\nwhen javascript was released?",
      choices:["2003","2005","1998","1989"]
    },
  ]);
  console.log("2005");
  
  if (answer1.Q1 === "2005") {
    result = "correct";
    totalcorrectanswer++
  } else {
    result = "false";
    wrong++
  }
setTimeout(()=>{answer2.Q2 } ,2000)
  const answer2 = await inquirer.prompt([
    {
      name: "Q2",
      type: "list",
      message: "Who is the founder of Microsoft?",
      choices:["Elon musk","Bill gates","Nelson mandela","shawn mendes"]
    },
  ]);
  console.log("Bill gates");
  
  if (answer2.Q2 === "Bill gates") {
    result = "correct";
    totalcorrectanswer++
  } else {
    result = "false";
    wrong++
  }



  const answer3 = await inquirer.prompt([
    {
      name: "Q3",
      type: "list",
      message: "Which is the largest country of the world in respect to area?",
      choices:["Russia","China","United States","India"]
    },
  ]);
  console.log("Russia");
  
  if (answer3.Q3=== "Russia") {
    result = "correct";
    totalcorrectanswer++
  } else {
    result = "false";
    wrong++
  }

  const answer4= await inquirer.prompt([
    {
      name: "Q4",
      type: "list",
      message: "What is the captial of United states of America?",
      choices:["Georgia","Washington DC","New York","Alaska"]
    },
  ]);
  console.log("Washington DC");
  
  if (answer4.Q4=== "Washington DC") {
    result = "correct";
    totalcorrectanswer++
  } else {
    result = "false";
    
    wrong++
  }

  const answer5= await inquirer.prompt([
    {
      name: "Q5",
      type: "list",
      message: "Where is the headquater of UNO?",
      choices:["New York","London","Shingai","Switzerland"]
    },
  ]);
  console.log("Switzerland");
  
  if (answer5.Q5=== "Switzerland") {
    result = "correct";
    totalcorrectanswer++
  } else {
    result = "false";
    wrong++
  }

console.log("\nYour Result:");
console.log("===============");
console.log(`Correct MCQS: ${totalcorrectanswer} out of ${total_question}`);
console.log(`Wrong MCQS: ${wrong}`);





