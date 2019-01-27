define(require => {
    const Zepto = require('zepto');
    const Mustache = require('mustache');
    const VideoPlayer = require('demoproject/js/components/video-player');
    const pageTemplate = require('text!demoproject/mustache-templates/pages/video.html');
    const playerTemplate = require('text!demoproject/mustache-templates/components/video-player.html');

    const execute = () => {
        const renderedPlayer = Zepto(Mustache.render(playerTemplate, {}));
        Zepto('#video-container').append(renderedPlayer);

        new VideoPlayer(renderedPlayer);
    };

    return {
        template: pageTemplate,
        execute
    };
});
