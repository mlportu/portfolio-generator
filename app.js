const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else{
                    console.log('Please eneter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            valdiate: ghName => {
                if(ghName){
                    return true;
                } else{
                    console.log('Please enter your GitHub username!');
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({confirmAbout}) => confirmAbout
        }
    ]);
};

const promptProject = portfiolioData => {
    if(!portfiolioData.projects){
        portfiolioData.projects=[];
    } 
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projName => {
                if(projName) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projDesc => {
                if(projDesc){
                    return true;
                } else{
                    console.log('Please enter a project description');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: [ 'JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: ghName => {
                if (ghName){
                    return true;
                }else {
                    console.log('Please enter the GitHub Link for your project')
                    return false;
                }
            }

        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
          },
          {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
          }
    ])
    .then(projectData =>{
        portfiolioData.projects.push(projectData);
        if(projectData.confirmAddProject){
            return promptProject(portfiolioData);
        }else{
            return portfiolioData;
        }
    });
};

promptUser()
    .then(promptProject)
    .then(portfiolioData => {
        console.log(portfiolioData);
    });

// const fs = require('fs');
// const generatePage = require ('./src/page-template.js');
// const profileDataArgs = process.argv.slice(2, process.argv.length);


// const [name, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     for (let i=0; i < profileDataArr.length; i += 1){
//         console.log(profileDataArr[i]); 
//     }
//     console.log('=============');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
    
// };

// printProfileData(profileDataArgs);




// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
//     console.log('Portfolio complete! Checkout index.html to see the output!');
// });