import axios from "axios"
import { UserPostRequest, UserPostResponse } from "./types"

export const getUserPosts = async(params: UserPostRequest): Promise<UserPostResponse | null> => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
        return response.data
    }catch(error){
        return null
    }
}