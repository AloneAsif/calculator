#! /usr/bin/env node
// calculator.ts
import inquirer from 'inquirer';
import chalk from 'chalk';
let answers = await inquirer.prompt([{
        name: 'num1',
        type: 'input',
        message: 'Enter the first number:',
    },
    {
        name: 'num2',
        type: 'input',
        message: 'Enter the second number:',
    },
    {
        name: 'operation',
        type: 'list',
        message: 'Select an operation:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide', 'Power'],
    }]);
let num1 = Number(answers.num1);
let num2 = Number(answers.num2);
if (answers.operation === 'Add') {
    console.log(chalk.blue(num1 + num2));
}
else if (answers.operation === 'Subtract') {
    console.log(chalk.red(num1 - num2));
}
else if (answers.operation === 'Multiply') {
    console.log(chalk.yellow(num1 * num2));
}
else if (answers.operation === 'Divide') {
    console.log(chalk.green(num1 / num2));
}
else if (answers.operation === 'Power') {
    console.log(`${chalk.yellow(num1)} exponenet ${chalk.yellow(num2)} is ${chalk.green(num1 ** num2)}`);
}
else {
    console.log(chalk.red('Please Enter Correct Values...'));
}
