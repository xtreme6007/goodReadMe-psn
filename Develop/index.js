const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');
const { prompt } = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
let licenseBadge = "";
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
        name: "license",
        message: "Please select a license",
        choices: ['MIT', 'Apache', 'GPL', 'Unlicensed'],
      } 
      {
        type: "input",
        name: "test",
        message: "Please enter any tests to run on this application."
      }   

];




// function to initialize program
 async function init() {

const prompt =  await inquirer.prompt(questions);

if(prompt.license === 'MIT') {
  licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
} else if(prompt.license === 'Apache') {
 licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
} else if(prompt.license === 'gpl') {
  licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
} else if(prompt.license === 'Unlicensed'){
  licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
}

const markdown = generateMarkdown(prompt, licenseBadge);
await writeFileAsync("README.md", markdown);

 }
// function call to initialize program
init();
