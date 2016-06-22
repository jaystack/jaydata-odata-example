"use strict";
/// <reference path="typings/tsd.d.ts" />
/// <reference path="JayDataContext.d.ts" />
require("jaydata/odata");
var JayDataContext_1 = require("./JayDataContext");
// autocreated context instance
JayDataContext_1.context.onReady().then(function (ctx) {
    ctx.Articles
        .include("Author")
        .orderBy(function (it) { return it.Title; })
        .map(function (it) { return { Title: it.Title, Author: it.Author.LoginName }; })
        .toArray()
        .then(function (result) { return console.log("autocreated instance", result); });
});
// creating entity context instance from type
var ctx = new JayDataContext_1.type({ name: "oData", oDataServiceHost: "http://localhost:9000/odata" });
ctx.onReady().then(function (ctx) {
    // read
    ctx.Articles
        .include("Author")
        .orderBy(function (it) { return it.Title; })
        .map(function (it) { return { Title: it.Title, Author: it.Author.LoginName }; })
        .toArray()
        .then(function (result) { return console.log("type instance", result); });
    // create
    var article = new ctx.Articles.elementType({ Title: 'New Article' });
    ctx.Articles.add(article);
    ctx.saveChanges().then(function (cnt) {
        console.log('saved', cnt);
        ctx.Articles.remove(article);
        ctx.saveChanges();
    });
});
// using factory function to create entity context instance
JayDataContext_1.factory({}).onReady().then(function (ctx) {
    ctx.Articles
        .include("Author")
        .orderBy(function (it) { return it.Title; })
        .map(function (it) { return { Title: it.Title, Author: it.Author.LoginName }; })
        .toArray()
        .then(function (result) { return console.log("factory function", result); });
});
