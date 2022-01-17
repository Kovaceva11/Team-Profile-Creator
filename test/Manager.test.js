// create testing functions for Manager. Import Manager.js

const Manager = require('../lib/Manager');

// Manager Object

describe('Manager', () => {
    // Test properties for the manager object by passing data through expect functions.
    it('should create an Manager Object and getRole will return Manager', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com'
        const officeNumberProperty = 555-555-5555;
        const titleProperty = 'Manager'
        const manager = new Manager(nameProperty, idProperty, emailProperty, officeNumberProperty, titleProperty);
        expect(typeof(manager)).toBe('object');
    });

    // test manager name and getName functions
    it('should check to manager name and getName', () => {
        const nameProperty = 'Des';
        const manager = new Manager(nameProperty);
        expect(manager.name).toBe('Des');
        expect(manager.getName()).toBe('Des');
    });
    
    // test manager id and getId functions
    it('should create properties for manager object then pass their values into the getFunctions', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const manager = new Manager(nameProperty, idProperty);
        expect(manager.id).toBe(32);
        expect(manager.getId()).toBe(32);
    });

    //  test manager email and getEmail functions
    it('should create properties for manager object then pass their values into the getFunctions', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com';
        const manager = new Manager(nameProperty, idProperty, emailProperty);
        expect(manager.email).toBe('des@gmail.com');
        expect(manager.getEmail()).toBe('des@gmail.com');
    });
    
    // test manager Role/Title and getRole functions
    it('should create properties for manager object then pass their values into the getFunctions', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com';
        const titleProperty = 'Manager';
        const manager = new Manager(nameProperty, idProperty, emailProperty, titleProperty);
        expect(manager.title).toBe('Manager');
        expect(manager.getRole()).toBe('Manager'); //getRole is title. tile is Role.
    });
    // test manager officeNumber and getofficeNumber() functions
    it('should create properties for manager object then pass their values into the getFunctions', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com';
        const titleProperty = 'Manager';
        const officeNumberProperty = 555-555-5555;
        const manager = new Manager(nameProperty, idProperty, emailProperty, officeNumberProperty, titleProperty);
        expect(manager.title).toBe('Manager');
        expect(manager.getOfficeNumber()).toBe(555-555-5555);
    })
});