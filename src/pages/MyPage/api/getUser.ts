import axios from "axios"
import { UserGetRequest, UserGetResponse } from "./types"

export const getUser = async(userId: UserGetRequest): Promise<UserGetResponse> => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId.userId}`)
        return { message: "User returned successfully", data: response.data}
    }catch(error){
        return { message: "Something went wrong", data: null}
    }
}