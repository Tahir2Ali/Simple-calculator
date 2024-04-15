#! /usr/bin/env node
import inquirer from 'inquirer'
import Choices from 'inquirer/lib/objects/choices.js'
const answer= await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstNumber"},
    {message: "Enter Second number",type: "number", name: "secondNumber"},
    {
        message: "Select one of the operators to perform opration",
        type: "list",
        name: "operator",
        choices: ["Additions", "Subtractions", "Multiplications", "Divisions"],
    }
])
// conditional statement
if(answer.operator === "Additions"){
    console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "Subtractions"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if(answer.operator === "Multiplications"){
    console.log(answer.firstNumber * answer.secondNumber);
} else if(answer.operator === "Divisions"){
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select valid operator")
}