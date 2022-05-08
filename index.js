
const inquirer = require('inquirer');
const generateHtml = require("./utils/generateHtml");
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



//QUESTIONS TO BUILD TEAM
function questions () {

    function managerCard (){
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
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
                name: "managerId",
                message: "What is the manager's ID number? (Required)",
                validate: idInput => {
                    if (idInput) {
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
                name: "managerEmail",
                message: "Describe how you would install your repository? (Required)",
                validate: emailInput => {
                    if (emailInput) {
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
                name: "ManagerOffice",
                message: "What is the manager's office number? (Required)",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    }
                    else{
                        console.log('Please enter the information required.')
                        return false;
                    }
                }
                
            },
        ])
    }
    
}



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