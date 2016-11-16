// service for providing source data from API
class DataService {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
    }

    getData() {
        return fetch(this.dataUrl).then((response) => {
          if(response.status != 200)
          {
            console.log(response);
          }
          else {
            return response.json();
          }
        }).catch((err) => {
            console.log(err);
        });
    }
};
