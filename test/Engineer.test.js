// create testing functions for Engineer. Import Engineer.js

const Engineer = require('../lib/Engineer');

// Engineer Object

describe('Engineer', () => {
    // Test properties for the engineer object by passing data through expect functions.
    it('should create an Engineer Object and getRole will return Engineer', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com'
        const titleProperty = 'Engineer'
        const engineer = new Engineer(nameProperty, idProperty, emailProperty, titleProperty);
        expect(typeof(engineer)).toBe('object');
    });

    // test engineer name and getName functions
    it('should check to engineer name and getName', () => {
        const nameProperty = 'Des';
        const engineer = new Engineer(nameProperty);
        expect(engineer.name).toBe('Des');
        expect(engineer.getName()).toBe('Des');
    });
    
    // test engineer id and getId functions
    it('should create properties for engineer object then pass their values into the getFunctions', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const engineer = new Engineer(nameProperty, idProperty);
        expect(engineer.id).toBe(32);
        expect(engineer.getId()).toBe(32);
    });

    //  test engineer email and getEmail functions
    it('should create properties for engineer object then pass their values into the getFunctions', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com';
        const engineer = new Engineer(nameProperty, idProperty, emailProperty);
        expect(engineer.email).toBe('des@gmail.com');
        expect(engineer.getEmail()).toBe('des@gmail.com');
    });
    
    // test engineer Role/Title and getRole functions
    it('should create properties for engineer object then pass their values into the getFunctions', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com';
        const titleProperty = 'Engineer';
        const engineer = new Engineer(nameProperty, idProperty, emailProperty, titleProperty);
        expect(engineer.title).toBe('Engineer');
        expect(engineer.getRole()).toBe('Engineer'); //getRole is title. tile is Role.
    });
});