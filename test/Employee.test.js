// create testing functions for Employee. Import Employee.js

const Employee = require('../lib/Employee');

// Employee Object

describe('Employee', () => {
    // Test properties for the employee object by passing data through expect functions.
    it('should create an Employee Object and getRole will return Employee', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com'
        const titleProperty = 'Employee'
        const employee = new Employee(nameProperty, idProperty, emailProperty, titleProperty);
        expect(typeof(employee)).toBe('object');
    });

    // test employee name and getName functions
    it('should check to employee name and getName', () => {
        const nameProperty = 'Des';
        const employee = new Employee(nameProperty);
        expect(employee.name).toBe('Des');
        expect(employee.getName()).toBe('Des');
    });
    
    // test employee id and getId functions
    it('should create properties for employee object then pass their values into the getFunctions', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const employee = new Employee(nameProperty, idProperty);
        expect(employee.id).toBe(32);
        expect(employee.getId()).toBe(32);
    });

    //  test employee email and getEmail functions
    it('should create properties for employee object then pass their values into the getFunctions', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com';
        const employee = new Employee(nameProperty, idProperty, emailProperty);
        expect(employee.email).toBe('des@gmail.com');
        expect(employee.getEmail()).toBe('des@gmail.com');
    });
    
    // test employee Role/Title and getRole functions
    it('should create properties for employee object then pass their values into the getFunctions', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com';
        const titleProperty = 'Employee';
        const employee = new Employee(nameProperty, idProperty, emailProperty, titleProperty);
        expect(employee.title).toBe('Employee');
        expect(employee.getRole()).toBe('Employee'); //getRole is title. tile is Role.
    });
});

