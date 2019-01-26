define(require => {
    const Zepto = require('zepto');
    const Mustache = require('mustache');
    const pubsub = require('demoproject/js/modules/pubsub');

    const pages = {
        '/': require('text!demoproject/mustache-templates/index.html'),
        '/page-1': require('text!demoproject/mustache-templates/page-1.html')
    };

    const pageRoot = Zepto('#page-root');

    pubsub.subscribe('open-page', page => {
        if (pages.hasOwnProperty(page)) {
            const rendered = Mustache.render(pages[page], {});
            pageRoot.html(rendered);
        } else {
            window.location.reload();
        }
    });
});
