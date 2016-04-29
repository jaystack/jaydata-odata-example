/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../JayDataContext.d.ts" />
/// <amd-dependency path="jaydata/odata" name="$data" />
import { type, factory, context } from "../JayDataContext";
declare var $data:any;

export function getInfo(){
    document.body.innerHTML += $data.version;
    if ('oData' in $data.RegisteredStorageProviders) document.body.innerHTML += '<br>JayData OData provider is available';
    document.body.innerHTML += '<br>JayDataContext type: ' + type;
    document.body.innerHTML += '<br>JayDataContext factory: ' + factory;
    document.body.innerHTML += '<br>JayDataContext context type name: ' + context;
    require(['some_module'], (some_module) => some_module.some_func());
}
export function showArticles(){
    // autocreated context instance
    context.onReady().then((ctx) => {
        ctx.Articles
            .include("Author")
            .orderBy(it => it.Title)
            .map(it => <any>{ Title: it.Title, Author: it.Author.LoginName })
            .toArray()
            .then((result) => {
                document.body.innerHTML += '<br><br>' + result.map(it => '<b>' + it.Title + '</b> by <i>' + it.Author + '</i>').join('<br>');
            });
    });
}