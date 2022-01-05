//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project(s)?",
    },

    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project(s):",
    },

    {
        type: "input",
        name: "install",
        message: "What command(s) should be used to install dependencies?",
        default: "npm i"
    },

    {
        type: "input",
        name: "usage",
        message:
            "What does a user need to know in regards to the usage of your project(s)?",
    },

    {
        type: "input",
        name: "contribute",
        message:
            "What are the guidelines that a user needs to know about contributing to your project(s)?",
    },

    {
        type: "input",
        name: "test",
        message: "Describe the test instructions for your project(s):",
    },

    {
        type: "list",
        name: "license",
        message: "Chose a license for this project:",
        choices: ["Apache", "Eclipse", "GNU", "IBM", "MIT", "Mozilla", "None"],
    },

    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), 
        (err) => err ? console.error(err) : console.log("\nThe ReadMe for your project has been created.")
    );
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => writeToFile("README.md", response));
}
// Function call to initialize app
init();