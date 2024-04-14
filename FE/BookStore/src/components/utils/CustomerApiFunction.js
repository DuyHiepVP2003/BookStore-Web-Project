import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/Customer'
})
export async function getAllCustomers() {
    try {
        const response = await api.get('')
        return response.data
    } catch (e) {
        console.log(e)
        return error.response.data
    }
}
export async function saveNewCustomer(newCustomer) {
    try {
        const response = await api.post('/save', newCustomer)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export async function deleteById(id) {
    try {
        const response = await api.delete(`/delete/${id}`)
        return response
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

export async function updateById(id, newCustomer) {
    try {
        const response = await api.put(`/update/${id}`, newCustomer)
        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}