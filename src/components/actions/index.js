import axios from 'axios';


export const GET_POSTS = "GET_POSTS";

export const apiRequestPosts = () =>
    dispatch => {

        const URL = ("https://jsonplaceholder.typicode.com")
        const response = axios.get(URL + "/posts")
        
        dispatch({
            type: GET_POSTS,
            payload: response
        })
    }