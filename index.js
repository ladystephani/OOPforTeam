const fs = require("fs");
const inquirer = require("inquirer");
const generateHtml = require("./src/html-template");

// prompt for info
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message:
        "Welcome. Please enter the work position of the team member. (Required)",
      name: "workPosition",
    },
    {
      type: "input",
      message: "Enter the name (Required)",
      name: "memberName",
    },
    {
      type: "input",
      message: "Enter the ID number (Required)",
      name: "id",
    },
    {
      type: "input",
      message: "Enter the email address (Required)",
      name: "email",
    },
    {
      type: "input",
      message: "Enter the GitHub:",
      name: "github",
    },
  ]);
};

promptUser().then((data) => {
  fs.writeFile("./dist/index.html", generateHtml(data), (err) => {
    if (err) throw err;
    console.log("File creating...Please check directory.");
  });
});
