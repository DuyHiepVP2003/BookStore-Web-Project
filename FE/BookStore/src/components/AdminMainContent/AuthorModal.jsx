import { useEffect, useState } from "react";
import { addNewAuthor, updateAuthorById } from "../utils/AuthorApiFunction";

const Modal = ({
    openModal,
    setOpenModal,
    selectAuthor,
    setSelectAuthor,
    handleAddAuthor,
}) => {
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const closeModal = () => {
        setOpenModal(false)
        setSelectAuthor(null)
    }
    const handleSubmitForm = async () => {
        if (selectAuthor) {
            const newAuthor = await updateAuthorById(formData, selectAuthor.id)
        } else {
            const newAuthor = await addNewAuthor(formData)
        }
        handleAddAuthor(newAuthor)
        closeModal()
    }
    useEffect(() => {
        if (selectAuthor) {
            setFormData({
                name: selectAuthor.name,
                description: selectAuthor.description
            })
        } else {
            setFormData({
                name: '',
                description: ''
            })
        }
    }, [selectAuthor])
    return (
        openModal &&
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
            <form onSubmit={handleSubmitForm} className="bg-white rounded-lg p-8 flex flex-col w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
                <label className="mb-4 font-semibold">Tên</label>
                <input onChange={handleInputChange} type="text" name="name" value={formData.name} className="mb-4 p-3 outline-none border border-gray-200 rounded-md" />
                <label className="mb-4 font-semibold">Mô tả</label>
                <input onChange={handleInputChange} type="text" name="description" value={formData.description} className="mb-4 p-3 outline-none border border-gray-200 rounded-md" />
                <div className="flex mt-4">
                    <button onClick={closeModal} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md w-1/2 mx-2">Đóng</button>
                    <button type="submit" className="bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded-md w-1/2 mx-2">
                        {selectAuthor ? "Cập nhật" : "Thêm mới"}
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Modal