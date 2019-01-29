define(require => {
    const Zepto = require('zepto');
    const Mustache = require('mustache');
    const pubsub = require('demoproject/js/modules/pubsub');
    const historyManager = require('demoproject/js/modules/history-manager');

    const pages = {
        '/': require('demoproject/js/pages/home'),
        '/image': require('demoproject/js/pages/image'),
        '/video': require('demoproject/js/pages/video')
    };


    pubsub.subscribe('open-page', openPage);

    Zepto(document).on('click', 'a.open-page', function(e) {
        e.preventDefault();
        openPage({
            path: $(this).attr('href')
        });
    });


    const pageRoot = Zepto('#page-root');

    function openPage({path, history='push'}) {
        if (pages.hasOwnProperty(path)) {
            if (history === 'push') {
                historyManager.pushState(path);
            } else if (history === 'replace') {
                historyManager.replaceState(path);
            }

            const page = pages[path];

            const rendered = Mustache.render(page.template, {});
            pageRoot.html(rendered);

            page.execute();
        } else {
            window.location.pathname = path;
        }
    }
});
