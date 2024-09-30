import axios from "axios"
import { UserAlbumsRequest, UserAlbumsResponse } from "./types"

export const getUserAlbums = async(params: UserAlbumsRequest): Promise<UserAlbumsResponse | null> => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}/albums`)
        return response.data
    }catch(error){
        return null
    }
}