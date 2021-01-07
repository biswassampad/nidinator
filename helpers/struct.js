const shell = require('shelljs');

const _this = this;

exports.createStruct = async(params) => {
    return new Promise((resolve, reject) => {
        const project_name = params.project_name;
        const project_type = params.framework_param;

        switch (project_type) {
            case ('es'):
                console.log('creating basic bioler plate');
                _this.createProjectFolders(project_name)
                    .then(async() => {
                        console.log('creating file 1');
                        await _this.createFile(project_name, 'index', 'js');
                    })
                    .catch(err => {
                        reject(err);
                    })
                resolve('Boilerplates Populated');
                break;
            default:
        }
    });
}


exports.createFile = async(projectName, filename, extension) => {
    console.log('creating file 2')
    return new Promise((resolve, reject) => {
        try {
            const filePath = `${process.cwd()}/${projectName}/${filename}.${extension}`;
            shell.touch(filePath);
            resolve(filePath);
        } catch (e) {
            reject(e)
        }
    })
}

exports.createProjectFolders = async(projectName) => {
        return new Promise((resolve, reject) => {
            try {
                const projectpath = `${process.cwd()}/${projectName}`;

                const controllerPath = `${process.cwd()}/${projectName}/Controllers`;
                const routePath = `${process.cwd()}/${projectName}/routes`;
                const helperPath = `${process.cwd()}/${projectName}/helpers`;
                shell.mkdir(projectpath) && shell.mkdir(controllerPath) && shell.mkdir(routePath) && shell.mkdir(helperPath);
                resolve('Folders Created');
            } catch (e) {
                reject(e)
            }
        })
    }
    /* For struct i am setting a parameter  by using that parameter i dont have to pass the whole entity inside

    es - express+simple (express framework with mongodb)
    esm - express framework with mysql
    esc - express framework with cassandra
    esa- express mongo auth
    esma - express mysql auth
    esca - express cassandra auth
    esas - esa with socket
    esmas - esm with socket 
    escas - esca with socket
    so we can put a switch case according to that 
    */