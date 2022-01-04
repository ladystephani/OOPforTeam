const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer("Kat", "kat@gmail.com", 3, "katkat");

  expect(engineer.name).toBe("Kat");
  expect(engineer.email).toBe("kat@gmail.com");
  expect(engineer.id).toBe(3);
  expect(engineer.github).toBe("katkat");
});

test("gets role of employee", () => {
  const engineer = new Engineer("Kat", "kat@gmail.com", 3, "katkat");

  expect(engineer.getRole()).toBe("Engineer");
});

test("gets github of employee", () => {
  const engineer = new Engineer("Kat", "kat@gmail.com", 3, "katkat");

  expect(engineer.getGithub()).toBe("katkat");
});
