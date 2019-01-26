define(require => {
    const Zepto = require('zepto');
    const Mustache = require('mustache');
    const pubsub = require('demoproject/js/modules/pubsub');
    const historyManager = require('demoproject/js/modules/history-manager');

    const pages = {
        '/': require('demoproject/js/pages/home'),
        '/gallery': require('demoproject/js/pages/gallery'),
        '/video': require('demoproject/js/pages/video')
    };

    const pageRoot = Zepto('#page-root');

    function openPage({path, history='push'}) {
        if (history === 'push') {
            historyManager.pushState(path);
        } else if (history === 'replace') {
            historyManager.replaceState(path);
        }

        if (pages.hasOwnProperty(path)) {
            const page = pages[path];

            const rendered = Mustache.render(page.template, {});
            pageRoot.html(rendered);

            page.execute();
        } else {
            window.location.reload();
        }
    }

    pubsub.subscribe('open-page', openPage);

    Zepto(document).on('click', 'a.open-page', function(e) {
        e.preventDefault();
        openPage({
            path: $(this).attr('href')
        });
    });
});
