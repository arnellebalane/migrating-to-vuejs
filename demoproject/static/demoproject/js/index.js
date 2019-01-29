require([
    'zepto',
    'demoproject/js/modules/page-manager',
    'demoproject/js/modules/pubsub',
    'demoproject/js/components/popup',
    'build/demoproject/vue/amd-adapters/TheHeader'
], (Zepto, pageManager, pubsub, popup, TheHeader) => {

    TheHeader.$mount('#header-container');

    TheHeader.$on('navigate', path => {
        pubsub.publish('open-page', {path});
    });

    TheHeader.$on('open-popup', () => popup.open());

    pubsub.publish('open-page', {
        path: window.location.pathname,
        history: 'replace'
    });
});
