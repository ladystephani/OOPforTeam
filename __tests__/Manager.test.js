const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager("Sven", "sven@gmail.com", 2, 10);

  expect(manager.name).toBe("Sven");
  expect(manager.email).toBe("sven@gmail.com");
  expect(manager.id).toBe(2);
  expect(manager.officeNumber).toBe(10);
});

test("gets role of employee", () => {
  const manager = new Manager("Sven", "sven@gmail.com", 2, 10);

  expect(manager.getRole()).toBe("Manager");
});

test("gets office num of employee", () => {
  const manager = new Manager("Sven", "sven@gmail.com", 2, 10);

  expect(manager.getOfficeNumber()).toBe(10);
});
