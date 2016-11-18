// service for providing source data from API
class DataService {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
    }

    getData() {
      return axios.get(this.dataUrl)
        .then((response) => {
          if(response.status != 200)
          {
            console.log(response);
          }
          else {
            return response.data.articles;
          }
        })
        .catch((err) => {
            console.log(err);
        });
    }
};
