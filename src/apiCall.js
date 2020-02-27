
import axios from 'axios';

 export const apiCall = () =>{
    var url = "http://newsapi.org/v2/top-headlines?country=us&apiKey="+ process.env.REACT_APP_API_AUTH;


return axios.get(url)
.then(function(response) {
  console.log(response.data.articles)
  const data = response.data.articles
  this.setState({
    data
  })
})


}
    