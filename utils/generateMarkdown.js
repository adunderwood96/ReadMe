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
  