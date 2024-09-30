import axios from "axios"
import { SinglePostCommentsRequest, SinglePostCommentsResource } from "./types"

export const getSinglePostComments = async(params: SinglePostCommentsRequest): Promise<SinglePostCommentsResource | null> => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
        return response.data
    }catch(error){
        return null
    }
}