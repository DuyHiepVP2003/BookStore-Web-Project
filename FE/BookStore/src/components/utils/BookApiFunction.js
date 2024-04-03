import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/Book'
})
export async function getAllBooks() {
    try {
        const response = await api.get('')
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export async function getBookById(id) {
    try {
        const response = await api.get(`${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export async function saveNewBook(newBook) {
    try {
        const response = await api.post('/save', newBook)
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

export async function updateById(id, newBook) {
    try {
        const response = await api.put(`/update/${id}`, newBook)
        return response.data
    } catch (error) {
        console.log(error)
    }
}