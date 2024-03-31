import { useEffect, useState } from "react"
import { saveNewPublisher, updateById } from "../utils/PublisherApiFunction"

const PublisherModal = ({
    openModal,
    setOpenModal,
    handleAddPublisher,
    selectPublisher,
    setSelectPublisher
}) => {
    const [formData, setFormData] = useState({
        name: '',
    })
    const handleInputChange = (e) => {
        let { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmitForm = async () => {
        if (selectPublisher) {
            const response = await updateById(selectPublisher.id, formData)
        } else {
            const response = await saveNewPublisher(formData)
        }
        handleAddPublisher(response.data)
        closeModal()
    }
    const closeModal = () => {
        setOpenModal(false)
        setSelectPublisher(null)
    }
    useEffect(() => {
        if (selectPublisher) {
            setFormData({
                name: selectPublisher.name,
            })
        }
        else {
            setFormData({
                name: '',
            })
        }
    }, [selectPublisher])
    return (
        openModal &&
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
            <form onSubmit={handleSubmitForm} className="bg-white rounded-lg p-8 flex flex-col w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Thêm mới nhà cung cấp</h2>
                <label className="mb-4 font-semibold">Tên</label>
                <input onChange={handleInputChange} value={formData.name} required type="text" name="name" className="mb-4 p-3 outline-none border border-gray-200 rounded-md" />
                <div className="flex mt-4">
                    <button onClick={closeModal} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md w-1/2 mx-2">Đóng</button>
                    <button type="submit" className="bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded-md w-1/2 mx-2">
                        {selectPublisher ? "Cập nhật" : "Thêm mới"}
                    </button>
                </div>
            </form>
        </div>
    )
}
export default PublisherModal