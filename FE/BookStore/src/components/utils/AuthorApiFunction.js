import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/Author'
})

export async function getAllAuthor() {
    try {
        const response = await api.get('')
        return response.data
    } catch (err) {
        console.error(err)
    }
}

export async function deleteAuthorById(id) {
    try {
        const response = await api.delete(`/delete/${id}`)
        return response.data
    }catch(err) {
        console.error(err)
    }
}

export async function addNewAuthor(author) {
    try{
        const response = await api.post('/save', author)
        return response.data
    }catch(err) {
        console.error(err)
    }
}

export async function updateAuthorById(author, id) {
    try{
        const response = await api.put(`/update/${id}`, author)
        return response.data
    }catch(err) {
        console.error(err)
    }
}