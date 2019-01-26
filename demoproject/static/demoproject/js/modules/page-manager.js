define(require => {
    const Zepto = require('zepto');
    const Mustache = require('mustache');
    const pubsub = require('demoproject/js/modules/pubsub');
    const historyManager = require('demoproject/js/modules/history-manager');

    const pages = {
        '/': require('text!demoproject/mustache-templates/index.html'),
        '/page-1': require('text!demoproject/mustache-templates/page-1.html'),
        '/page-2': require('text!demoproject/mustache-templates/page-2.html'),
        '/page-3': require('text!demoproject/mustache-templates/page-3.html')
    };

    const pageRoot = Zepto('#page-root');

    function openPage({path, history='push'}) {
        if (history === 'push') {
            historyManager.pushState(path);
        } else if (history === 'replace') {
            historyManager.replaceState(path);
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
