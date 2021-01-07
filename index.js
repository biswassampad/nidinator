const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');

const init = async() => {
    console.log(
        chalk.green(
            figlet.textSync("Nodinator", {
                font: "Ghost",
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    )

}

const baseQuestion = require('./helpers/questions')

const createFile = (filename, extension) => {
    const filePath = `${process.cwd()}/${filename}.${extension}`;
    shell.touch(filePath);
    return filePath;
}

const run = async() => {
    init();
    const answers = await baseQuestion.askQuestions();
    const { PROJECT_NAME, BASE_FRAMEWORK, DATABASE, AUTH } = answers;
    // const filepath = createFile(FILENAME,EXTENSION);
    console.log('Project Name :', PROJECT_NAME);
    console.log('BASE_FRAMEWORK :', BASE_FRAMEWORK);
    console.log('Database :', DATABASE);
    console.log('Authentication :', AUTH);
    if (AUTH == 'Y' || AUTH == "y" || AUTH == "Yes" || AUTH == "YES" || AUTH == "") {
        console.log('Activating Auth Questions');
        const authAnswers = baseQuestion.authQuestions();
        const { AUTH_CONTROLLER } = authAnswers;
        if (AUTH_CONTROLLER == 'Y' || AUTH_CONTROLLER == "y" || AUTH_CONTROLLER == "Yes" || AUTH_CONTROLLER == "YES" || AUTH_CONTROLLER == "") {

            console.log('Generating Files');
        }
    }
}

run()