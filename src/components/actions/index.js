import axios from 'axios';




export const apiRequestPosts  = () =>
async dispatch  => {

    var url = "http://newsapi.org/v2/top-headlines?country=us&apiKey="+ process.env.REACT_APP_API_KEY;
        const response = await axios.get(url)
       
        dispatch({
            type: "GET_POSTS",
            payload: response.data.articles
        })
    
    }

// export const apiRequestUsers = (id) => 
//  async dispatch =>{
//     const response = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)

//     dispatch({
//         type: "GET_USERS",
//         payload:response.data
//     })
  
//  }

