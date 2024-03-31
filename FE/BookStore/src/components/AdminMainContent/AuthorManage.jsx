import { useEffect } from "react"
import { useState } from "react"
import { deleteAuthorById, getAllAuthor } from "../utils/AuthorApiFunction"
import Modal from "./AuthorModal"

const AuthorManage = () => {
    const [authors, setAuthors] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [selectAuthor, setSelectAuthor] = useState(null)
    const handleShowModal = () => {
        setOpenModal(!openModal)
    }
    const handleSelectAuthor = (author) => {
        setSelectAuthor(author)
        handleShowModal()
    }
    const handleAddAuthor = (newAuthor) => {
        setAuthors([...authors, newAuthor])
    }
    const handleDeleteAuthor = async (id) => {
        try {
            await deleteAuthorById(id)
            setAuthors(authors.filter(author => author.id !== id))
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getAllAuthor()
            .then((res) => {
                setAuthors(res.data)
            })
            .catch((err) => {
                console.log("Error getting authors")
            })
    }, [])
    return (
        <>
            <div className="flex flex-col items-center w-full pt-20 bg-gray-100">
                <div className="w-2/3 translate-y-1/2">
                    <div className="font-bold text-xl text-white bg-black py-6 px-6 rounded-xl w-full mx-4">Danh sách tác giả</div>
                </div>
                <div className="w-3/4 rounded-xl py-20 bg-white shadow-lg">
                    <span onClick={handleShowModal} className="font-semibold p-4 bg-blue-500 text-white ml-4 rounded-lg cursor-pointer">Thêm mới tác giả</span>
                    <table className="table-auto w-full min-w-[640px] bg-white mt-4">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Tác giả</p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Mô tả</p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map(author => (
                                <tr onClick={() => handleSelectAuthor(author)} key={author.id} className="hover:bg-gray-100 cursor-pointer">
                                    <td className="py-3 px-5 border-b border-blue-gray-50">{author.name}</td>
                                    <td className="py-3 px-5 border-b border-blue-gray-50">{author.description}</td>
                                    <td
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleDeleteAuthor(author.id)
                                        }}
                                        className="py-3 px-5 border-b border-blue-gray-50 text-red-600 hover:underline">Xóa</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                selectAuthor={selectAuthor}
                setSelectAuthor={setSelectAuthor}
                handleAddAuthor={handleAddAuthor}
            />
        </>
    )
}
export default AuthorManage