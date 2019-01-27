define(require => {
    const Zepto = require('zepto');
    const Mustache = require('mustache');
    const template = require('text!demoproject/mustache-templates/components/popup.html');

    const open = () => {
        const rendered = Mustache.render(template, {});
        Zepto(document.body).append(rendered);
    };

    const close = () => {
        Zepto('#popup-container').remove();
    };

    Zepto(document).on('click', '.popup-container', e => {
        if (!e.target.closest('.popup')) {
            close();
        }
    });

    return {
        open,
        close
    };
});
