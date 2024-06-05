#! /usr/bin/env node 
import inquirer from "inquirer";
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "Todoitem",
            type: "input",
            message: "What you want to add in your todos?",
        },
        {
            name: "addMore",
            type: 'list',
            choices: ["Yes", "No"]
        },
    ]);
    const { Todoitem, addMore } = input;
    todos.push(Todoitem);
    if (addMore == "No") {
        console.log("Todolist: ");
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
        break;
    }
}
