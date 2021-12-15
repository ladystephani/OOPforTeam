const fs = require("fs");

const generateHtml = () => {
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
            <h1 class="page-title text-secondary bg-dark py-2 px-3">Company Name</h1>
        </div>
    </header>
    <main class="container my-5">
        <div class="container flex-row justify-space-between align-center py-3">
            <h4 class="page-title text-secondary bg-dark py-2 px-3">Manager</h4>
        </div>
        <div class="container flex-row justify-space-between align-center py-3">
            <h4 class="page-title text-secondary bg-dark py-2 px-3">Engineer</h4>
        </div>
        <div class="container flex-row justify-space-between align-center py-3">
            <h4 class="page-title text-secondary bg-dark py-2 px-3">Intern</h4>
        </div>
    </main>
    <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by lady</h3>
    </footer>
</body>
</html>
`;
};
fs.writeFile("./dist/index.html", generateHtml(), (err) => {
  if (err) throw err;
  console.log("File creating...Please check directory.");
});
