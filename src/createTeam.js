// import Manager, Engineer and Intern js files.
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// Create function to generate the profile team. Loop through array of team to push the employee's inputted data from CLI. When user selects finish, it will only add the profiles inputted into the CLI. Can input additional team members. 
function renderEmployeeCards(renderTeam) {
    let renderSquad = []
    for(let i = 0; i < renderTeam.length; i++) {
      const teammate = renderTeam[i];
      switch(teammate.getRole()) {
        case 'Manager':
          const manager = new Manager(teammate.name, teammate.id, teammate.email, teammate.officeNumber);
          renderSquad.push(renderManager(manager));
          break;
        case 'Engineer':
          const engineer = new Engineer(teammate.name, teammate.id, teammate.email, teammate.github);
          renderSquad.push(renderEngineer(engineer));
          break;
        case 'Intern':
          const intern = new Intern(teammate.name, teammate.id, teammate.email, teammate.school);
          renderSquad.push(renderIntern(intern));
          break;
      }
    }
    return renderSquad.join(``)
}

const renderManager = (Manager) => {
    return `
    <div class="col mb-5">
                <div class="card h-100">                    
                    <div class="card-body p-4">
                        <div class="text-center card-title">
                            <!-- Manager Role/Title Name-->
                            <h1><i class="fa fa-coffee"></i></h1>
                            <h1>${Manager.getRole()}</h1>
                            <h5 class="fw-bolder">${Manager.getName()}</h5>
                            <!-- List group items for Properties-->
                            <li class="list-group-item">ID #: ${Manager.getId()}</li>
                            <li class="list-group-item"><i class="fas fa-envelope"></i> <a class="list-font" href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                            <li class="list-group-item"><i class="fas fa-phone"></i> ${Manager.getOfficeNumber()}</li>
                        </div>
                    </div>                    
                </div>
            </div>
            `
}

const renderEngineer = (Engineer) => {
    return `
    <div class="col mb-5">
                <div class="card h-100">
                    <!-- Engineer details-->
                    <div class="card-body p-4">
                        <div class="text-center card-title">
                            <!-- Role/Title Name-->
                            <h1><i class="fas fa-tools"></i></h1>
                            <h1>${Engineer.getRole()}</h1>
                            <h5 class="fw-bolder">${Engineer.getName()}</h5>
                            <!-- List group items for Properties-->
                            <li class="list-group-item">ID #: ${Engineer.getId()}</li>
                            <li class="list-group-item"><i class="fas fa-envelope"></i> <a class="list-font" href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                            <!-- insert engineer github template literals-->
                            <li class="list-group-item"><i class="fab fa-github"></i> <a class="list-font" href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
                        </div>
                    </div>                    
                </div>
            </div>`
}

const renderIntern = (Intern) => {
    return `
    <div class="col mb-5">
                <div class="card h-100">
                    <!-- Intern details-->
                    <div class="card-body p-4">
                        <div class="text-center card-title">
                            <!-- Role/Title Name-->
                            <h1><i class="fas fa-laptop-medical"></i></h1>
                            <h1>${Intern.getRole()}</h1>
                            <h5 class="fw-bolder">${Intern.getName()}</h5>
                            <!-- List group items for Properties-->
                            <li class="list-group-item">ID #: ${Intern.getId()}</li>
                            <li class="list-group-item"><i class="fas fa-envelope"></i> <a class="list-font" href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                            <!-- insert engineer github template literals-->
                            <li class="list-group-item"><i class="fas fa-graduation-cap"></i> ${Intern.getSchool()}</li>
                        </div>
                    </div>                    
                </div>
            </div>
            `
}

function createTeam(renderTeam) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
        <title>Team Profile Creator</title>
    </head>
    <body>
        <!-- Header-->
    <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">Team Profile Creator</h1>
                <p class="lead fw-normal text-white-50 mb-0">A simple app for creating your team.</p>
            </div>
        </div>
    </header>
    <!-- Employee Details Section -->
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <!-- Start of Manager Card-->
                ${renderEmployeeCards(renderTeam)}
            </div>
        </div>
    </section>
    </body>
    </html>
    `
}


  module.exports = createTeam;