const inquirer = require('inquirer');

exports.askQuestions = () => {
    const questions = [{
            name: "PROJECT_NAME",
            type: "input",
            message: "Name of your project ? "
        },
        {
            type: "list",
            name: "BASE_FRAMEWORK",
            message: "Which of the framework you want to work with ?",
            choices: [".Express", ".Restify"],
            filter: function(val) {
                return val.split('.')[1];
            }
        },
        {
            type: "list",
            name: "DATABASE",
            message: "Which of the database you want to work with ?",
            choices: [".MongoDB", ".MySQL", ".Cassandra"],
            filter: function(val) {
                return val.split('.')[1];
            }
        },
        {
            name: "AUTH",
            type: "input",
            message: "Do you want Authentication ? Y/N"
        }
    ];
    return inquirer.prompt(questions);
}

exports.authQuestions = () => {
    const questions = [{
        name: "AUTH_CONTROLLER",
        type: "input",
        message: "Do you want to keep the User entity as Authentication Entity?(Y/N)"
    }];

    return inquirer.prompt(questions);
}

exports.socketQuestion = () => {
    const questions = [{
        name: "SOCKET_REQUIRED",
        type: "input",
        message: "Do you want to add socket ? (Y/N)"
    }]

    return inquirer.prompt(questions);
}

exports.testQuestion = () => {
    const questions = [{
        name: "TEST_REQUIRED",
        type: "input",
        message: "Do you want to work with TDD (Test Driven Development) ? (*usually faster and error free)"
    }]

    return inquirer.prompt(questions);
}

exports.lintQuestion = () => {
    const questions = [{
            name: "ESLINT",
            type: "input",
            message: "Do you want to enable ES-Lint ? (Y/N) "
        },
        {
            type: "list",
            name: "ESLINT_TYPE",
            message: "What kind of ES-Lint configuration you want ?",
            choices: [".Lint error prevention on save ?", ".Lint error prevention on commit ?", ".Manual"],
            filter: function(val) {
                return val.split('.')[1];
            }
        }
    ]

    return inquirer.prompt(questions);

}