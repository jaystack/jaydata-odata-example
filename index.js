var $data = require('jaydata/odata');

$data.initService('http://odatav4-demo.jaystack.com:9000/odata').then(function(ctx){
    /*ctx.Articles.include(it => it.Author).map(function(it){ return { Title: it.Title, Author: it.Author.LoginName }; }).orderBy('it.Title').toArray().then(function(result){
        console.log(result);
    });*/
    
    ctx.Categories.filter(it => it.Articles.some(it => it.Title.startsWith('Article')),
        { some: ctx.Articles.filter(it => it.Title.startsWith('Art2icle')) }).toArray($data.fdebug);
});