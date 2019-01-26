define(require => {
    const template = require('text!demoproject/mustache-templates/home.html');

    const execute = () => {
        console.log('You are in the home page!');
    };

    return {
        template,
        execute
    };
});
