#!/usr/bin/env node(shabang)

import inquirer from "inquirer";


console.log("WELCOME TO ABEER CURRENCY CONVERTOR")
let exchange_rate: any ={
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.65,
    "AUD": 1.65,
    "PKR": 278.50,
    "SAR": 3.75,

}

let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message:"select the CURRENCY to convert",
        choices:["USD","EUR","JYP","CAD","AUD","PKR","SAR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"select the CURRENCY to convert into",
        choices:["USD","EUR","JYP","CAD","AUD","PKR","SAR"]
    },
    {
        name:"amount",
        type:"input",
        message:"enter the AMOUNT to convert"
    }
]);

let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula//
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//display//
console.log(`converted amount ${converted_amount.toFixed(3)}`)