import axios from 'axios';




export const apiRequestPosts  = () =>
async dispatch  => {

        const URL = ("https://jsonplaceholder.typicode.com")
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
       
        dispatch({
            type: "GET_POSTS",
            payload: response.data
        })
    
    }

export const apiRequestUsers = (id) => 
 async dispatch =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/"+ id)

    dispatch({
        type: "GET_USERS",
        payload:response
    })
  
 }