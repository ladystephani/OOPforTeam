const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager("Sven", "sven@gmail.com", 2);

  expect(manager.name).toBe("Sven");
  expect(manager.email).toBe("sven@gmail.com");
  expect(manager.id).toBe(2);
});
