// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## About 
  * This project is designed to ${data.description}


  ## Links:

  * Deployed application Url: ${data.deployed}
  * Github Repo: ${data.repo}
  
  ## Tabel of contents


> * [Title / Repository Name]
>   * [About]
>   * [Table of contents]
>   * [Installation]
>   * [Usage]
>   * [Screenshots]
>   * [Resources (Documentation and other links)]
>   * [Contributers]
>   * [License]



## Instalation

To install this application ${data.install}


## Usage

To use this application ${data.usage}





## Screen shots






## Resources




## Contributers
Contributers for this project were:

${data.contributers}

## License


${data.license}




`;
}

module.exports = generateMarkdown;
