define(require => {
    const pubsub = require('demoproject/js/modules/pubsub');

    const pushState = path => {
        window.history.pushState({}, document.title, path);
    };

    window.addEventListener('popstate', e => {
        pubsub.publish('open-page', {
            path: window.location.pathname,
            skipHistory: true
        });
    });

    return {pushState};
});
