const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');
// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
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
        message: "List guidelines for contribution",
        name: "contributionGuidelines"
    },
    {
        type: "input",
        message: "List instructions for testing the application",
        name: "test"
    }
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile("./demo/" + fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote: " + fileName);
    })

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
