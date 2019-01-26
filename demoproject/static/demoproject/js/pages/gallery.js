define(require => {
    const template = require('text!demoproject/mustache-templates/gallery.html');

    const execute = () => {
        console.log('You are in the gallery page!');
    };

    return {
        template,
        execute
    };
});
