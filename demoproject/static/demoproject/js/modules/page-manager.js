define(require => {
    const Zepto = require('zepto');
    const Mustache = require('mustache');

    const pages = {
        '/page-1': require('text!demoproject/mustache-templates/page-1.html')
    };

    console.log(pages);
});
