const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Gin", "gin@gmail.com", 4, "JHU");

  expect(intern.name).toBe("Gin");
  expect(intern.email).toBe("gin@gmail.com");
  expect(intern.id).toBe(4);
  expect(intern.school).toBe("JHU");
});

test("gets role of employee", () => {
  const intern = new Intern("Gin", "gin@gmail.com", 4, "JHU");

  expect(intern.getRole()).toBe("Intern");
});

test("gets school of employee", () => {
  const intern = new Intern("Gin", "gin@gmail.com", 4, "JHU");

  expect(intern.getSchool()).toBe("JHU");
});
