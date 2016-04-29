define(["require", "exports", "jaydata/odata", "../JayDataContext"], function (require, exports, $data, JayDataContext_1) {
    "use strict";
    function getInfo() {
        document.body.innerHTML += $data.version;
        if ('oData' in $data.RegisteredStorageProviders)
            document.body.innerHTML += '<br>JayData OData provider is available';
        document.body.innerHTML += '<br>JayDataContext type: ' + JayDataContext_1.type;
        document.body.innerHTML += '<br>JayDataContext factory: ' + JayDataContext_1.factory;
        document.body.innerHTML += '<br>JayDataContext context type name: ' + JayDataContext_1.context;
        require(['some_module'], function (some_module) { return some_module.some_func(); });
    }
    exports.getInfo = getInfo;
    function showArticles() {
        // autocreated context instance
        JayDataContext_1.context.onReady().then(function (ctx) {
            ctx.Articles
                .include("Author")
                .orderBy(function (it) { return it.Title; })
                .map(function (it) { return { Title: it.Title, Author: it.Author.LoginName }; })
                .toArray()
                .then(function (result) {
                document.body.innerHTML += '<br><br>' + result.map(function (it) { return '<b>' + it.Title + '</b> by <i>' + it.Author + '</i>'; }).join('<br>');
            });
        });
    }
    exports.showArticles = showArticles;
});
