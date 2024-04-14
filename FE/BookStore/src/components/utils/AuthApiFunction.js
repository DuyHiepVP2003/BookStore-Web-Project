import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:8080/api/v1/auth",
})
export async function checkUserValid(loginRequest) {
    try {
        const response = await api.post('', loginRequest)
        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}