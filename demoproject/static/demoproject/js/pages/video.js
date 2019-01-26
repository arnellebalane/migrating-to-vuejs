define(require => {
    const template = require('text!demoproject/mustache-templates/video.html');

    const execute = () => {
        console.log('You are in the video page!');
    };

    return {
        template,
        execute
    };
});
