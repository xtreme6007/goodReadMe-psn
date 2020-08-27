const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);
let license = "";
// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is this appliation designed to do?"
      },
      {
        type: "input",
        name: "deployed",
        message: "Enter the deployed aplication's url."
      },
      {
        type: "input",
        name: "repo",
        message: "Enter your GitHub repo URL"
      },
      {
        type: "input",
        name: "install",
        message: "Please enter Instalation Instructions."
      },
      {
        type: "input",
        name: "usage",
        message: "Please enter how the user should interface with this application."
      },
      {
        type: "input",
        name: "contributers",
        message: "Who contributed to this project?"
      },
      {
        type: "list",
        name: "License",
        message: "Please select a license",
        choices: ['MIT', 'Apache', 'GPL', 'Public-Domain'],
      }    

];

if(data.License === 'MIT') {
  license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
} else if(data.License === 'Apache') {

}


// function to initialize program
 async function init() {

const prompt =  await inquirer.prompt(questions);
const markdown = generateMarkdown(prompt);

await writeFileAsync("README.md", markdown);

 }
// function call to initialize program
init();
