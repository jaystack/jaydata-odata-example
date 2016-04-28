requirejs.config({
    paths: {
        'jaydata/core': '../node_modules/jaydata/public/jaydata',
        'jaydata/odata': '../node_modules/jaydata/public/jaydataproviders/oDataProvider',
        'jaydatacontext': '../JayDataContext'
    },
    shim: {
        'jaydata/odata': {
            deps: ['jaydata/core']
        }
    }
});

requirejs(['main-typescript'], function (Main) {
    Main.getInfo();
    Main.showArticles();
});
