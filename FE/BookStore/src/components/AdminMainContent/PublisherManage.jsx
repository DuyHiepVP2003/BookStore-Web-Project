import { useEffect } from "react"
import { useState } from "react"
import { deleteById, getAllPublishers } from "../utils/PublisherApiFunction"
import PublisherModal from "./PublisherModal"

const PublisherManage = () => {
    const [publishers, setPublisher] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [selectPublisher, setSelectPublisher] = useState(null)
    const handleShowModal = () => {
        setOpenModal(!openModal)
    }
    const handleAddPublisher = (newPublisher) => {
        setPublisher([...publishers, newPublisher])
    }
    const handleDeletePublisher = async (id) => {
        await deleteById(id)
        setPublisher(publishers.filter(publisher => publisher.id !== id))
    }
    const handleSelectPublisher = (selectPublisher) => {
        setSelectPublisher(selectPublisher)
        handleShowModal()
    }
    useEffect(() => {
        getAllPublishers()
            .then((res) => {
                setPublisher(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])
    return (
        <>
            <div className="flex flex-col items-center w-full pt-20 bg-gray-100">
                <div className="w-2/3 translate-y-1/2">
                    <div className="font-bold text-xl text-white bg-black py-6 px-6 rounded-xl w-full mx-4">Danh sách nhà cung cấp</div>
                </div>
                <div className="w-3/4 rounded-xl py-20 bg-white shadow-lg">
                    <span onClick={handleShowModal} className="font-semibold p-4 bg-blue-500 text-white ml-4 rounded-lg cursor-pointer">Thêm mới nhà cung cấp</span>
                    <table className="table-auto w-full min-w-[640px] bg-white mt-4">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Tên nhà cung cấp</p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                publishers.map(publisher => (
                                    <tr onClick={() => handleSelectPublisher(publisher)} key={publisher.id} className="hover:bg-gray-100 cursor-pointer">
                                        <td className="py-3 px-5 border-b border-blue-gray-50">{publisher.name}</td>
                                        <td onClick={(e) => {
                                            e.stopPropagation()
                                            handleDeletePublisher(publisher.id)
                                        }} className="py-3 px-5 border-b border-blue-gray-50 text-red-600 hover:underline">Xóa</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <PublisherModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleAddPublisher={handleAddPublisher}
                selectPublisher={selectPublisher}
                setSelectPublisher={setSelectPublisher}
            />
        </>
    )
}
export default PublisherManage