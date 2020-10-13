const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");

// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "List a detailed description of your project or web application",
        name: "applicationDetails"
    },
    {
        type: "input",
        message: "List a Table of Contents for your application",
        name: "tableOfContents"
    },
    {
        type: "input",
        message: "Provide any details necessary for installation of the application",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide Usage Information",
        name: "usageInformation"
    },
    {
        type: "input",
        message: "Provide Licenseing Information",
        name: "licensing"
    },
    {
        type: "input",
        message: "List guidelines for contribution",
        name: "contributionGuidelines"
    },
    {
        type: "input",
        message: "List instructions for testing the application",
        name: "test"
    },
    {
        type: "input",
        message: "Please provide any additional questions you may have",
        name: "questions"
    }
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Generated: " + fileName);
    });

};

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("GeneratedREADME.md", generatorMarkdown(data));
        });
};

// function call to initialize program
init();
