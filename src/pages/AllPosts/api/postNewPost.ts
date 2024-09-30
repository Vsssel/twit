import axios from "axios"
import { NewPostPostRequest } from "./types"

export const postNewPost = async(body: NewPostPostRequest) => {
    try{
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            body: body
        })
        console.log(response)
        return response
    }catch(error){
        return null
    }
}