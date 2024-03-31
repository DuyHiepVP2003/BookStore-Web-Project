import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/Category'
})
export async function getAllCategories() {
    try {
        const response = await api.get('')
        return response.data
    } catch (error) {
        console.error(error);
    }
}
export async function saveNewCategory(newCategory) {
    try {
        const response = await api.post('/save', newCategory)
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

export async function updateById(id, newCategory) {
    try {
        const response = await api.put(`/update/${id}`, newCategory)
        return response.data
    } catch (error) {
        console.log(error)
    }
}