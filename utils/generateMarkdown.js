// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) =>
  license === "None"
    ? ""
    : `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) =>
  license === "None"
    ? ""
    : `5. [License](#license)`;

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) =>
  license === "None"
    ? ""
    : `## License

Licensed under the ${license} license.`;

// TODO: Create a function to generate markdown for README
//title, description, table of contents, installation, usage, license, contributing, and tests
const generateMarkdown = ({
  name, title, description, installation, usage, credits, tests, license
}) =>
  `# ${title}

${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [Tests](#tests)
${renderLicenseLink(license)}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## Tests
${tests}

${renderLicenseSection(license)}

Copyright © ${name}. All rights reserved.`;

module.exports = generateMarkdown;
