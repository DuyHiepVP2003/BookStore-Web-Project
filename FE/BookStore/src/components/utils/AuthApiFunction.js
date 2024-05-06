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
export async function registerUser(newCustomer) {
    try {
        const response = await api.post('/register', newCustomer)
        return response.data
    } catch (error) {
        return error.response.data
    }
}
export async function verifyUser(code) {
    try {
        const response = await api.get(`/verify?code=${code}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}