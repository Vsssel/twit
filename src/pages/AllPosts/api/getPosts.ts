import axios from "axios"
import { PostsResponse } from "./types"

export const getPosts = async(): Promise<PostsResponse | null> => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }catch(error){
        console.log(error)
        return null
    }
}