const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createTeam = require('./src/createTeam')

const renderTeam = []
// Prompts employee in the terminal to add renderTeam member profile data. 
const promptEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter Team Manager Name',
      validate: name => {
          if(name) {
              return true;
          } else {
              console.log("Must enter Team Manager Name")
              return false;
          }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter Team Manager ID Number',
      validate: id => {
        if(isNaN(id)) {
            console.log("Enter Team Manager ID Number")
            return false;
        } else if (!id) {
            console.log("Must enter Team Manager ID Number")
            return false;
        }else {
            return true;
        }
    }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Team Manager Email Address',
        validate: email => {
            // mailFormat validates email address entered using a regular expression (All the special characters you see below). 
            mailFormat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            if (mailFormat) {
                return true;
            } else {
                console.log ("Please enter a valid Email Address.")
                return false;
            }
        }
      },
      {
        type: 'input',
        message: "Enter Team Manager Office Number",
        name: 'officeNumber',
        validate: officeNumber => {
            phoneFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(officeNumber);
            if (phoneFormat) {
                return true;
            } else {
                console.log('please enter valid phone number format. ex: 555-555-1234')
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Add Engineer, Intern or Finish',
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'role',
    },
])

.then((managerData) => {
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    renderTeam.push(manager);

    switch(managerData.role) {
        case 'Engineer':
            promptEngineer();
            break;
        case 'Intern':
            promptIntern();
            break;
        default:
            writeToFile('dist/index.html', createTeam(renderTeam));    
    }
});
};

// Engineer Prompt

const promptEngineer = () => {
return inquirer.prompt([
    {
        type: 'input',
        message: "Please enter the Engineer's name.",
        name: 'name',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter a valid name for the Engineer!')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter an ID Number for the Engineer.',
        name: 'id',
        validate: id => {
            if (isNaN(id)) {
                console.log("Please enter a number for the Engineer's ID!")
                return false;
            } else if (!id) {
                console.log("Please enter a number for the Engineer's ID!")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter an email address for the Engineer.',
        name: 'email',
        validate: email => {
            mailFormat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            if (mailFormat) {
                return true;
            } else {
                console.log("Please enter a valid email!")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Please enter the Engineer's GitHub username.",
        name: 'github',
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter a GitHub username!")
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Would you like to add another Engineer, Intern, or Finish',
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'role',
    },
])

.then((engineerData) => {
    const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
    renderTeam.push(engineer);

    switch(engineerData.role) {
        case 'Engineer':
            promptEngineer();
            break;
        case 'Intern':
            promptIntern();
            break;
        default:
            writeToFile('dist/index.html', createTeam(renderTeam));        
    }
})
};

// Intern Prompt
const promptIntern = () => {
return inquirer.prompt([
    {
        type: 'input',
        message: "Please enter the Intern's name.",
        name: 'name',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Please enter the Intern's name!")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Please enter the Intern's ID number.",
        name: 'id',
        validate: id => {
            if (isNaN(id)) {
                console.log("Please enter a number for the ID!")
                return false;
            } else if (!id) {
                console.log("Please enter a number for the ID!")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "Please enter the Intern's email.",
        name: 'email',
        validate: email => {
            mailFormat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            if (mailFormat) {
                return true;
            } else {
                console.log("Please enter a valid email!")
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Please enter the school the Intern is attending or attended.",
        name: 'school',
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("Please enter a school name!")
                return false;
            }
        }
    },
    {
        type: 'list',
        message: "Would you like to add an Engineer, another Intern, or Finish",
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'role',
    },
])

.then((internData) => {
    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
    renderTeam.push(intern);

    switch(internData.role) {
        case 'Engineer':
            promptEngineer();
            break;
        case 'Intern':
            promptIntern();
            break;
        default:
            writeToFile('dist/index.html', createTeam(renderTeam));
    }
})
};

promptEmployee();

function writeToFile(file, data) {
fs.writeFileSync(file, data, (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('File successfully created')
    }
});
};