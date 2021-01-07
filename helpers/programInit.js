const baseQuestion = require('./questions');
const struct = require("./struct");

exports.init = async() => {
    let base_obj = {};
    const baseAnswers = await baseQuestion.baseQuestion();
    const { PROJECT_NAME } = baseAnswers;

    if (PROJECT_NAME == "" || PROJECT_NAME == null || PROJECT_NAME.indexOf(' ') >= 0) {
        console.log("Sorry Project Name is invalid");
        return;
    }
    const answers = await baseQuestion.askQuestions();
    const { BASE_FRAMEWORK, DATABASE, AUTH } = answers;

    console.log('Project Name :', PROJECT_NAME);
    base_obj.project_name = PROJECT_NAME;

    console.log('BASE_FRAMEWORK :', BASE_FRAMEWORK);
    console.log('Database :', DATABASE);
    console.log('Authentication :', AUTH);

    if (
        AUTH == 'Y' ||
        AUTH == "y" ||
        AUTH == "Yes" ||
        AUTH == "YES" ||
        AUTH == "") {

        console.log('Activating Auth Questions');
        const authAnswers = await baseQuestion.authQuestions();
        const { AUTH_CONTROLLER } = authAnswers;

        console.log('Auth controller', AUTH_CONTROLLER);

        if (
            AUTH_CONTROLLER == 'Y' ||
            AUTH_CONTROLLER == "y" ||
            AUTH_CONTROLLER == "Yes" ||
            AUTH_CONTROLLER == "YES" ||
            AUTH_CONTROLLER == "") {

            console.log('Generating Files');

            base_obj.framework_param = 'es';
            await struct.createStruct(base_obj)
                .then(result => {
                    console.log('Framework Created');
                })
                .catch(err => {
                    console.log('Error in framework creation', err);
                })
        }
    }
}