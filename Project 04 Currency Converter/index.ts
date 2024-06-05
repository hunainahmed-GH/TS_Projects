#! /usr/bin/env node

import inquirer from "inquirer";

    const currency: any ={
        USD: 1, //Base currency
        EUR: 0.91,
        GBP: 0.76,
        IND: 74.57,
        PKR: 280
    };
    let user_answer = await inquirer.prompt(
        [
           {
                name: "from",
                message: "Enter from currency:",
                type: "list",
                choices: ["USD", "EUR", "GBP", "IND", "PKR"]
            },
            {
                name: "to",
                message: "Enter to currency:",
                type: "list",
                choices: ["USD", "EUR", "GBP", "IND", "PKR"]
            },
            {
                name: "amount",
                message: "Enter your amount:",
                type: "number"
            }
        ]
    );
    let fromamount = currency[user_answer.from];
    let toamount = currency[user_answer.to];
    let amount = user_answer.amount;
    let baseAmount = amount /fromamount;  //USD base currency
    let convertedAmount = baseAmount * toamount;
    let roundNumber = convertedAmount.toFixed(2);
    console.log(roundNumber);