const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     for (let i=0; i < profileDataArr.length; i += 1){
//         console.log(profileDataArr[i]); 
//     }
//     console.log('=============');

//     profileDataArr.forEach(profileItem => console.log(profileItem));
    
// };

// printProfileData(profileDataArgs);

const generagePage = (name, github) => {
   return `
    <!DOCTYPE html>
    <html lang ="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo </title>
    </head>
    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

console.log(name, github);
console.log(generagePage(name, github));