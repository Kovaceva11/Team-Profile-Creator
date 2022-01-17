// create testing functions for Intern. Import Intern.js

const Intern = require('../lib/Intern');

// Intern Object

describe('Intern', () => {
    // Test properties for the intern object by passing data through expect functions.
    it('should test properties for Intern Object', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com'
        const titleProperty = 'Intern'
        const schoolProperty = 'Georgia Tech'
        const intern = new Intern(nameProperty, idProperty, emailProperty, titleProperty, schoolProperty);
        expect(typeof(intern)).toBe('object');
    });

    // test intern name and getName functions
    it('should test properties for intern name and getName()', () => {
        const nameProperty = 'Des';
        const intern = new Intern(nameProperty);
        expect(intern.name).toBe('Des');
        expect(intern.getName()).toBe('Des');
    });
    
    // test intern id and getId functions
    it('should test properties for intern ID then pass their values into the getId()', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const intern = new Intern(nameProperty, idProperty);
        expect(intern.id).toBe(32);
        expect(intern.getId()).toBe(32);
    });

    //  test intern email and getEmail functions
    it('should test properties for intern email then pass their values into the getEmail', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com';
        const intern = new Intern(nameProperty, idProperty, emailProperty);
        expect(intern.email).toBe('des@gmail.com');
        expect(intern.getEmail()).toBe('des@gmail.com');
    });

     // test intern School and get Schoolfunctions
     it('should test properties for intern School then pass their values into the getSchool', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com';
        const schoolProperty = "Georgia Tech";
        
        
        const intern = new Intern(nameProperty, idProperty, emailProperty, schoolProperty);
        expect(intern.school).toBe('Georgia Tech');
        expect(intern.getSchool()).toBe('Georgia Tech');
    });
    
    // test intern Role/Title and getRole functions
    it('should test properties for intern Role/Title then pass their values into the getRole()', () => {
        const nameProperty = 'Des';
        const idProperty = 32;
        const emailProperty = 'des@gmail.com';
        const titleProperty = 'Intern';
        const schoolProperty = 'Georgia Tech';
        const intern = new Intern(nameProperty, idProperty, emailProperty, schoolProperty, titleProperty);
        expect(intern.title).toBe('Intern');
        expect(intern.getRole()).toBe('Intern'); 
    });      
});