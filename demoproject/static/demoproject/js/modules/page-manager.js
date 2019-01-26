define(require => {
    const Zepto = require('zepto');
    const Mustache = require('mustache');
    const pubsub = require('demoproject/js/modules/pubsub');
    const historyManager = require('demoproject/js/modules/history-manager');

    const pages = {
        '/': require('text!demoproject/mustache-templates/index.html'),
        '/page-1': require('text!demoproject/mustache-templates/page-1.html')
    };

    const pageRoot = Zepto('#page-root');

    function openPage({path, skipHistory}) {
        if (!skipHistory) {
            historyManager.pushState(path);
        }

        if (pages.hasOwnProperty(path)) {
            const rendered = Mustache.render(pages[path], {});
            pageRoot.html(rendered);
        } else {
            window.location.reload();
        }
    }

    pubsub.subscribe('open-page', openPage);

    Zepto(document).on('click', 'a.open-page', e => {
        e.preventDefault();
        openPage({
            path: e.target.getAttribute('href')
        });
    });
});
