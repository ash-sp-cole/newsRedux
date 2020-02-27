
import axios from 'axios';

 export const apiCall = () =>{
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'sources=bbc-news&' +
    process.env.REACT_APP_API_AUTH;
console.log(process.env.REACT_APP_API_AUTH, "api key")
axios.get(url)
.then(function(response) {
  console.log(response.json());
})


}
    