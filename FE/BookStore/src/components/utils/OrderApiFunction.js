import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:8080/api/v1/Order",
})
export async function saveNewOrder(orderRequest) {
    try {
        const response = await api.post('/save', orderRequest)
        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}
export async function getAllOrder() {
    try {
        const response = await api.get('')
        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}
export async function deleteOrderById(id){
    try {
        const response = await api.delete(`/delete/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}
export async function getOrderById(id){
    try {
        const response = await api.get(`${id}`)
        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data       
    }
}

export async function changeOrderStatus(id){
    try {
        const response = await api.put(`/update/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
        return error.message.data
    }
}