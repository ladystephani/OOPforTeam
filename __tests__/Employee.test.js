const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
  const employee = new Employee("Dave", "dave@gmail.com", 1);

  expect(employee.name).toBe("Dave");
  expect(employee.email).toBe("dave@gmail.com");
  expect(employee.id).toBe(1);
});

test("gets name of employee", () => {
  const employee = new Employee("Kat", "kat@gmail.com", 3);

  expect(employee.getName()).toBe("Kat");
});
test("gets email of employee", () => {
  const employee = new Employee("Kat", "kat@gmail.com", 3);

  expect(employee.getEmail()).toBe("kat@gmail.com");
});
test("gets id of employee", () => {
  const employee = new Employee("Kat", "kat@gmail.com", 3);

  expect(employee.getId()).toBe(3);
});
test("gets role of employee", () => {
  const employee = new Employee("Kat", "kat@gmail.com", 3);

  expect(employee.getRole()).toBe("Employee");
});
