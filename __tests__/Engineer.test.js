const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer("Kat", "kat@gmail.com", 3);

  expect(engineer.name).toBe("Kat");
  expect(engineer.email).toBe("kat@gmail.com");
  expect(engineer.id).toBe(3);
});
