const dataUrl = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=05d1310787a94c24a707f1c3c8d2584c';

let dataService = new DataService(dataUrl);
let articleService = new ArticleService();

dataService.getData().then((data) => {

    // after getting data I converted it into html text
    let articlesHtml = articleService.getArticlesHtml(data);
    //let articlesHtml = articleService.getArticlesHtml(data.articles);

    // found container for pushing html articles
    let articlesContainer = document.getElementsByClassName('articles');

    if (articlesContainer && articlesContainer.length > 0) {

        // pushed articles into container
        articlesContainer[0].innerHTML = articlesHtml.join(' ');
    }
}).catch((err) => {
    console.log(err);
});
