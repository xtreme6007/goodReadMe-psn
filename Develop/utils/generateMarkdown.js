// function to generate markdown for README
function generateMarkdown(data, license) {
  return `# ${data.title}

  ## License
  ${license}
  This application is licensed under the ${data.license} license.

  

  ## Description 
  * This project is designed to ${data.description}


  ## Links:

  * Deployed application Url: ${data.deployed}
  * Github Repo: ${data.repo}
  
  ## Tabel of contents


> * [Title / Repository Name]
>   * [About](#about)
>   * [Table of contents](#tabel-of-contents)
>   * [Installation](#installation)
>   * [Usage](#usage)
>   * [Screenshots](#sceenshots)
>   * [Resources (Documentation and other links)](#resources)
>   * [Contributers](#contributers)
>   * [License](#license)
>   * [Tests](#tests)
>   * [Questions](#questions)



## Instalation

${data.install}


## Usage

 ${data.usage}





## Screen shots






## Resources




## Contributers
Contributers for this project were:

${data.contributers}


## Tests

${data.test}

## Questions?
GitHub UserName: ${data.username}
GitHub Profile: https://github.com/${data.username}
Email: ${data.email}
Please contact me via email for any further question.



`;
}

module.exports = generateMarkdown;
