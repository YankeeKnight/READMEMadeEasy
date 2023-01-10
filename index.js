// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your git hub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How will your project be used?"
    },
    {
        type: "list",
        name: "license",
        message: "Please select the License you are using",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "None"]
    },
    {
        type: "input",
        name: "credits",
        message: "Please add any collaborators or third party assets."
    },
    {
        type: "input",
        name: "tests",
        message: "Please advise how you would run a test for this project?"
    },
    {
        type: "input",
        name: "readmeTitle",
        message: "Please name your README file, excluding the '.md'."
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) =>
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err)
            : console.log("Your README file was successfully generated!")
    );

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(`../${answers.readmeTitle}.md`, answers);
    });
};

// Function call to initialize app
init();