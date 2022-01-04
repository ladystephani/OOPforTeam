const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHtml = require("./src/html-template");

const teamArr = [];

// prompt for info
const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message:
          "Welcome. Please enter the manager name of the team. (Required)",
        name: "managerName",
      },
      {
        type: "input",
        message: "Enter the email address (Required)",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the ID number (Required)",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the office number (Required)",
        name: "officeNumber",
      },
    ])
    .then((input) => {
      const { managerName, email, id, officeNumber } = input;
      const manager = new Manager(managerName, email, id, officeNumber);

      teamArr.push(manager);
    });
};

const createEmployee = () => {
  return inquirer
    .prompt([
      //first give a choice option for users so as to not repeat code for these two roles
      //not for storing role title (defining the class took care of it)
      {
        type: "list",
        message: "Choose the role of the employee:",
        choices: ["Engineer", "Intern"],
        name: "role",
      },
      {
        type: "input",
        message: "Enter the name. (Required)",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the email address (Required)",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the ID number (Required)",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the Github (Required)",
        name: "github",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        message: "Enter the school of the intern (Required)",
        name: "school",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        message: "Would you like to add more members?",
        name: "confirmAddEmployee",
        default: false,
      },
    ])
    .then((input) => {
      let { name, email, id, role, github, school, confirmAddEmployee } = input;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, email, id, github);
      } else if (role === "Intern") {
        employee = new Intern(name, email, id, school);
      }

      teamArr.push(employee);

      //redo process if true
      if (confirmAddEmployee) {
        return createEmployee(teamArr);
      } else {
        return teamArr;
        //now stores array of classes, not objects
      }
    });
};

createManager()
  .then(createEmployee)
  .then((arr) => {
    return generateHtml(arr);
  })
  .then((data) => {
    //data is html tags as expected
    fs.writeFile("./dist/index.html", data, (err) => {
      if (err) throw err;
      console.log("File creating...Please check directory.");
    });
  });
