const chalk = require('chalk');
const figlet = require('figlet');

const initator = require('./helpers/programInit');

const init = async() => {
    console.log(
        chalk.green(
            figlet.textSync("Nidinator", {
                font: "Ghost",
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    )

}


const run = async() => {
    init();
    initator.init();
}

run()

/*
lets generate some basic files
*/