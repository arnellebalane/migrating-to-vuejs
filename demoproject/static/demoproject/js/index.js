require([
    'zepto',
    'demoproject/js/modules/page-manager',
    'demoproject/js/modules/pubsub'
], (Zepto, pageManager, pubsub) => {
    pubsub.publish('open-page', window.location.pathname);
});
