import axios from "axios"
import { SinglePostRequest, SinglePostResourse } from "./types"

export const getSinglePost = async(params: SinglePostRequest): Promise<SinglePostResourse | null> => {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: { id:  params.id }
        })
        return response.data
    }catch(error){
        return null
    }

}