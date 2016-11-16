
const createArticle = function (articleJson) {
  return `
  <div class="article-container">
      <div class="body">
          <div class="title">
            <a href="${articleJson.url}" alt="Full article" target="_blank">
              <h2>${articleJson.title}</h2>
            </a>
          </div>
          <div class="author">by ${articleJson.author}</div>
          <div class="description">${articleJson.description}</div>
          <div class="publish-at">${articleJson.publishedAt}</div>
      </div>
      <div class="image">
        <a href="${articleJson.url}" alt="Full article" target="_blank">
          <img src="${articleJson.urlToImage}">
        </a>
      </div>
  </div> `;
}

class ArticleService{
  getArticlesHtml(articles){
    return articles.map((el) => createArticle(el));
  }
}
