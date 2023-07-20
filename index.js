const inquirer = require (`inquirer`);
const fs = require (`fs`);

const questions = [
    // questions to prompt user for desired output 
    {
    name: `letters`,
    type: `input`,
    message: `Which characters would you like to display? (upto 3)`,
    validate: (input) => input.length <= 3 // WILL NOT LET USER INPUT MORE THAN 3 CHARACTERS IN COMMAND PROMPT
    }
    ,
    {
        name: `shape`,
        type: `list`,
        message: `Please pick which shape you would like your logo to be...`,
        choices: [`Square`, `Circle`, `Triangle`]
    }
    ,
    {
        name: `color`,
        type: `input`,
        message: `What color would you like your logo to be? (You can also enter hex color codes)`
    }
    ,    
    {
        name: `colorText`,
        type: `input`,
        message: `What color would you like your text to be? (You can also enter hex color codes)`
    }
]

inquirer.prompt(questions)
.then(answers =>{
    

    fs.writeFile(`./examples/output.svg`, JSON.stringify(answers), (err) =>
    err ? console.error(err) : console.log('Success!') )
});
