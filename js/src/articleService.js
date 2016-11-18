// When I use modules feature it will be a private function (I think)
const createArticle = function (articleJson) {
  return `
  <div class="article-container">
      <div class="body">
      <span class="image">
        <a href="${articleJson.url}" alt="Full article" target="_blank">
          <img src="${articleJson.urlToImage}">
        </a>
      </span>

          <div class="title">
            <a href="${articleJson.url}" alt="Full article" target="_blank">
              <h2>${articleJson.title}</h2>
            </a>
          </div>
          <div class="author">by ${articleJson.author}</div>
          <div class="description">${articleJson.description}</div>
          <div class="publish-at">${articleJson.publishedAt}</div>
      </div>
  </div>`;
}

// service for converting JSON objects to HTML articles objects
class ArticleService{
  getArticlesHtml(articles){
    return articles.map((el) => createArticle(el));
  }
}
