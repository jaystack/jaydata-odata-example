var $data = require('jaydata/odata');

$data.initService('http://localhost:9000/odata').then(function(ctx){
    ctx.Articles.include(it => it.Author).map((it) => { return { Title: it.Title, Author: it.Author.LoginName }; }).orderBy(it => it.Title).toArray($data.fdebug);
    ctx.Categories.filter(it => it.Articles.some(it => it.Title.startsWith('Article'))).toArray($data.fdebug);
});