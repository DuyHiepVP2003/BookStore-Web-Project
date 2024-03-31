import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/Publisher'
})

export async function getAllPublishers() {
    try {
        const response = await api.get('')
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export async function saveNewPublisher(newPublisher) {
    try {
        const response = await api.post('/save', newPublisher)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function deleteById(id) {
    try {
        const response = await api.delete(`/delete/${id}`)
        return response
    } catch (error) {
        console.log(error)
    }
}

export async function updateById(id, newPublisher) {
    try {
        const response = await api.put(`/update/${id}`, newPublisher)
        return response.data
    } catch (error) {
        console.log(error)
    }
}