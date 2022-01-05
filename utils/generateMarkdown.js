function renderLicenseBadge(license) {
    switch (license) {
      case "Apache":
        return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      case "Eclipse":
        return "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)";
      case "GNU":
        return "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      case "IBM":
        return "![License](https://img.shields.io/badge/License-IPL%201.0-blue.svg)";
      case "MIT":
        return "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
      case "Mozilla":
        return "![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      case "None":
        return;
    }
  }
  
  // Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
      case "Apache":
        return "https://opensource.org/licenses/Apache-2.0";
      case "Eclipse":
        return "https://opensource.org/licenses/EPL-1.0";
      case "GNU":
        return "http://www.gnu.org/licenses/gpl-3.0";
      case "IBM":
        return "https://opensource.org/licenses/IPL-1.0";
      case "MIT":
        return "https://opensource.org/licenses/MIT";
      case "Mozilla":
        return "https://opensource.org/licenses/MPL-2.0";
      case "None":
        return;
    }
  }
  
  // Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
      var section =
        `## License\nThis application is licensed under [${license}](${renderLicenseLink(license)})`;
      return section;
    }
    else
      return;
  }

  // Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Test](#Tests)
  * [License](#License)
  * [Questions](#Questions)
    
  ## Description
  ${data.description}

  ## Install
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribute}

  ## Test
  ${data.test}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Questions
  If there are any further questions please feel free to contact me:

  Github: https://github/${data.username}

  Email: ${data.email}`
}
  
  module.exports = generateMarkdown;