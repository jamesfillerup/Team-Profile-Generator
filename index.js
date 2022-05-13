
const inquirer = require('inquirer');
const generateHtml = require("./utils/generateHtml");
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "index.html");

let empArr = []


const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
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
            else {
                console.log('Please enter the information required.')
                return false;
            }
        }

    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
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
            else {
                console.log('Please enter the information required.')
                return false;
            }
        }

    },
]

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Please enter the information required.')
                return false;
            }
        }

    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID number? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            }
            else {
                console.log('Please enter the information required.')
                return false;
            }
        }

    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Please enter the information required.')
                return false;
            }
        }

    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's Github username? (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('Please enter the information required.')
                return false;
            }
        }

    },
]

function addNew (){
    inquirer.prompt(
        {
            type: "list",
            name: "newPerson",
            message: "Would you like to add another employee? (Required)",
            choices: ["Yes", "No"]
            }
    ).then((answers) => {
        console.log(answers);
        if (answers.newPerson === "Yes"){
            init ();
        }else {
            writeToFile(empArr)
        }
    })
}


function addManager (){
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        console.table(answers);
        //USE THE manager.(VALUE) TO ATTACH TO generateHtml.js
        let manager = new Manager( answers.name, answers.id, answers.email, answers.officeNumber);
        empArr.push(manager);
        console.log(empArr)
        addNew();
    }
        
    )
}

function addEngineer (){
    inquirer.prompt(engineerQuestions)
    .then((answers) => {
        console.table(answers);
        //USE THE manager.(VALUE) TO ATTACH TO generateHtml.js
        let engineer = new Engineer( answers.name, answers.id, answers.email, answers.github);
        empArr.push(engineer);
        console.log(empArr)
        addNew();
    }
        
    )
}
// .then(answers => {
//     console.table(answers);
//     
// })
// managerCard();


function writeToFile(data) {

    fs.writeFile("./dist/index.html", generateHtml(data), err => {
        if (err) {
            throw err
        }
    })
}


function init() {
    inquirer
        .prompt(
            {
            type: "list",
            name: "employeeType",
            message: "What kind of employee? (Required)",
            choices: ["Manager", "Engineer", "Intern"]
            }
        )
        .then((answers) => {
            console.log(answers);
            // writeToFile(answers)
            // let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            // questions.push(manager);
            if (answers.employeeType === "Manager"){
                console.log ("manager");
                addManager();
            }else if(answers.employeeType === "Engineer"){
                console.log ("engineer");
                addEngineer();
            } else{
                console.log("intern");
                addIntern();
            }
        })
}

//start app
init();