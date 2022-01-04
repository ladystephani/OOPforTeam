const generateManager = (manager) => {
  return `
    <div class="container flex-row justify-space-between align-center py-3">
    <h4 class="page-title flex-row text-dark bg-primary py-2 px-3">${manager.name}</h4>
    <p class="page-paragraph flex-row text-dark py-2 px-3">
    Manager
    </p>
    <p class="page-paragraph flex-row text-dark py-2 px-3">
    Email: ${manager.email}
    </p>
    <p class="page-paragraph flex-row text-dark py-2 px-3">
    ID: ${manager.id}
    </p>
    <p class="page-paragraph flex-row text-dark py-2 px-3">
    ${manager.officeNumber}
    </p>
    </div>`;
};

const generateEngineer = (engineer) => {
  return `
      <div class="container flex-row justify-space-between align-center py-3">
      <h4 class="page-title flex-row text-dark bg-primary py-2 px-3">${engineer.name}</h4>
      <p class="page-paragraph flex-row text-dark py-2 px-3">
      engineer
      </p>
      <p class="page-paragraph flex-row text-dark py-2 px-3">
      Email: ${engineer.email}
      </p>
      <p class="page-paragraph flex-row text-dark py-2 px-3">
      ID: ${engineer.id}
      </p>
      <p class="page-paragraph flex-row text-dark py-2 px-3">
      ${engineer.github}
      </p>
      </div>`;
};

const generateIntern = (intern) => {
  return `
      <div class="container flex-row justify-space-between align-center py-3">
      <h4 class="page-title flex-row text-dark bg-primary py-2 px-3">${intern.name}</h4>
      <p class="page-paragraph flex-row text-dark py-2 px-3">
      engineer
      </p>
      <p class="page-paragraph flex-row text-dark py-2 px-3">
      Email: ${intern.email}
      </p>
      <p class="page-paragraph flex-row text-dark py-2 px-3">
      ID: ${intern.id}
      </p>
      <p class="page-paragraph flex-row text-dark py-2 px-3">
      ${intern.school}
      </p>
      </div>`;
};

const page = (employeeSections) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width", initial-scale=1.0"/>
<title>Team Profile</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
<link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../src/style.css">
</head>
<body>
    <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">Team profile</h1>
        </div>
    </header>
    <main class="container my-5">
        ${employeeSections}
    </main>
    <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ladystephani</h3>
    </footer>
</body>
</html>
`;
};

//pass in teamArr here
const generateHtml = (userEnteredData) => {
  sectionsArr = [];

  for (let i = 0; i < userEnteredData.length; i++) {
    //userEnteredData is expected as teamArr - array of classes
    //the way to identify the element in teamArr is by getRole()
    const employee = userEnteredData[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerSection = generateManager(employee);
      sectionsArr.push(managerSection);
    }
    if (role === "Engineer") {
      const engineerSection = generateEngineer(employee);
      sectionsArr.push(engineerSection);
    }
    if (role === "Intern") {
      const internSection = generateIntern(employee);
      sectionsArr.push(internSection);
    }
  }

  const employeeSections = sectionsArr.join("");
  return page(employeeSections);
};

module.exports = generateHtml;
