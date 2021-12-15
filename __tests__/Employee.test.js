const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
  const employee = new Employee("Dave", "dave@gmail.com", 1);

  expect(employee.name).toBe("Dave");
  expect(employee.email).toBe("dave@gmail.com");
  expect(employee.id).toBe(1);
});
