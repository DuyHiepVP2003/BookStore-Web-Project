import { useEffect, useState } from "react"
import { saveNewCategory, updateById } from "../utils/CategoryApiFunction"
const CategoryModal = ({ openModal, setOpenModal, selectCategory, setSelectCategory, handleAddCategory }) => {
    const [formData, setFormData] = useState({
        name: '',
        parentCategory: '',
    })
    const closeModal = () => {
        setOpenModal(false)
        setSelectCategory(null)
    }
    const handleInputChange = (e) => {
        let { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmitForm = async () => {
        if (selectCategory) {
            const res = await updateById(selectCategory.id, formData)
        }
        else {
            const res = await saveNewCategory(formData)
        }
        handleAddCategory(res.data)
        closeModal()
    }
    useEffect(() => {
        if (selectCategory) {
            setFormData({
                name: selectCategory.name,
                parentCategory: selectCategory.parentCategory
            })
        }
        else {
            setFormData({
                name: '',
                parentCategory: ''
            })
        }
    }, [selectCategory])
    return (
        openModal &&
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
            <form onSubmit={handleSubmitForm} className="bg-white rounded-lg p-8 flex flex-col w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Thêm mới category</h2>
                <label className="mb-4 font-semibold">Tên category</label>
                <input onChange={handleInputChange} type="text" name="name" value={formData.name} className="mb-4 p-3 outline-none border border-gray-200 rounded-md" />
                <label className="mb-4 font-semibold">Link ảnh mô tả</label>
                <input onChange={handleInputChange} type="text" name="parentCategory" value={formData.parentCategory} className="mb-4 p-3 outline-none border border-gray-200 rounded-md" />
                <div className="flex mt-4">
                    <button onClick={closeModal} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md w-1/2 mx-2">Đóng</button>
                    <button type="submit" className="bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded-md w-1/2 mx-2">
                        {selectCategory ? "Cập nhật" : "Thêm mới"}
                    </button>
                </div>
            </form>
        </div>
    )
}
export default CategoryModal