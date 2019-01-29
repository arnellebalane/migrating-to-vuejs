require([
    'zepto',
    'demoproject/js/modules/page-manager',
    'demoproject/js/modules/pubsub',
    'demoproject/js/components/popup',
    'build/demoproject/vue/amd-adapters/TheHeader'
], (Zepto, pageManager, pubsub, popup, TheHeader) => {

    console.log(TheHeader);

    pubsub.publish('open-page', {
        path: window.location.pathname,
        history: 'replace'
    });

    Zepto('.open-popup').on('click', e => {
        e.preventDefault();
        popup.open();
    });
});
