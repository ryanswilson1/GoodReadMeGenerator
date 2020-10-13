// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.userName}/${data.projectTitle})
  
  # Description
  ${data.applicationDetails}
  
  # Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  # Installation
  The following necessary dependencies must be installed to run the application properly: ${data.installation}
  
  # Usage
  ​This application is used for ${data.usageInformation}
  
  # License
  This project is license under the ${data.licensing} license.
  
  # Contributing
  ​Contributors: ${data.contributionGuidelines}
  
  # Tests
  To run tests, you need to run the following command: ${data.test}
  
  # Questions
  If you have any questions about the repo, open an issue or contact ${data.userName} directly ${data.email}.
  `
}

module.exports = generateMarkdown;

