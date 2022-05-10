
const inquirer = require('inquirer');
const generateHtml = require("./utils/generateHtml");
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

let questions = [
    {

    }
]

function managerCard (){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
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
            name: "id",
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
            name: "email",
            message: "What is your email? (Required)",
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
            name: "officeNumber",
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
    ]).then(answers => {
        console.table(answers);
        let manager = new Manager( answers.name, answers.id, answers.email, answers.officeNumber)
    })
};
managerCard();

function writeToFile(data) {

    fs.writeFile("./dist/index.html", generateHtml(data), err =>{
        if (err) {
            throw err
        }
    })
}


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