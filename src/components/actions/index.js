import axios from 'axios';


export const GET_POSTS = "GET_POSTS";

export const apiRequestPosts = () => {


    return function () {

        const URL = ("https://jsonplaceholder.typicode.com")

        const response = axios.get(URL + "/posts")


        return {
            type: GET_POSTS,
            payload: response
        }

    }
}