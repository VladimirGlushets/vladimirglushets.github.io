'use strict';

var dataUrl = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=05d1310787a94c24a707f1c3c8d2584c';

var dataService = new DataService(dataUrl);
var articleService = new ArticleService();

dataService.getData().then(function (data) {

    // after getting data I converted it into html text
    var articlesHtml = articleService.getArticlesHtml(data);
    //let articlesHtml = articleService.getArticlesHtml(data.articles);

    // found container for pushing html articles
    var articlesContainer = document.getElementsByClassName('articles');

    if (articlesContainer && articlesContainer.length > 0) {

        // pushed articles into container
        articlesContainer[0].innerHTML = articlesHtml.join(' ');
    }
}).catch(function (err) {
    console.log(err);
});