// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateHtml = require("./utils/generateHtml");
const fs = require('fs');
const { rejects } = require('assert');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your repository? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else{
                console.log('Please enter the information required.')
                return false;
            }
        }
        
    },
    {
        type: "input",
        name: "description",
        message: "What is the purpose of your project? (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else{
                console.log('Please enter the information required.')
                return false;
            }
        }
        
    },
    {
        type: "input",
        name: "installation",
        message: "Describe how you would install your repository? (Required)",
        validate: installationInput => {
            if (installationInput) {
                return true;
            }
            else{
                console.log('Please enter the information required.')
                return false;
            }
        }
        
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project? (Required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else{
                console.log('Please enter the information required.')
                return false;
            }
        }
        
    },
    {
        type: "input",
        name: "credits",
        message: "Please list any credits or collaborators here.",
        
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license do you have for your project",
        choices: [ "APACHE", "BSD", "BOOST","GNU"]
        
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        
    }
]

// TODO: Create a function to write HTML file
function writeToFile(data) {

    fs.writeFile("./dist/index.html", generateHtml(data), err =>{
        if (err) {
            throw err
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile(answers)
        })
}

// Function call to initialize app
init();