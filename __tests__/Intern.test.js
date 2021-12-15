const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Gin", "gin@gmail.com", 4);

  expect(intern.name).toBe("Gin");
  expect(intern.email).toBe("gin@gmail.com");
  expect(intern.id).toBe(4);
});
