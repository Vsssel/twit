import axios from "axios"
import { UserTodosRequest, UserTodosResponse } from "./types"

export const getUserTodos = async(params: UserTodosRequest): Promise<UserTodosResponse | null> => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`)
        return response.data
    }catch(error){
        return null
    }
}