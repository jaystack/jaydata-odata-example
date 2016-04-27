/// <reference path="typings/tsd.d.ts" />
/// <reference path="JayDataContext.d.ts" />
import "jaydata-odatajs";
import "jaydata/odata";
import { type, factory, $data } from "./JayDataContext";

// creating entity context instance from type
var ctx = new type({ name: "oData", oDataServiceHost: "http://odatav4-demo.jaystack.com:9000/odata" });
ctx.onReady().then((ctx) => {
    // read
    ctx.Articles
        .include("Author")
        .orderBy(it => it.Title)
        .map(it => <any>{ Title: it.Title, Author: it.Author.LoginName })
        .toArray()
        .then(result => console.log("type instance", result));
        
    // create
    var article = new ctx.Articles.elementType({ Title: 'New Article' });
    ctx.Articles.add(article);
    ctx.saveChanges().then((cnt) => {
        console.log('saved', cnt);
        ctx.Articles.remove(article);
        ctx.saveChanges();
    });
});

// using factory function to create entity context instance
factory({
    /* more entity context configuration props
       defaults to OData with service host defined as source of context generation */
}).onReady().then((ctx) => {
    ctx.Articles
        .include("Author")
        .orderBy(it => it.Title)
        .map(it => <any>{ Title: it.Title, Author: it.Author.LoginName })
        .toArray()
        .then(result => console.log("factory function", result));
});