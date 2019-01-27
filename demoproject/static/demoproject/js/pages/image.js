define(require => {
    const template = require('text!demoproject/mustache-templates/pages/image.html');

    const execute = () => {
        console.log('You are in the image page!');
    };

    return {
        template,
        execute
    };
});
