import { useEffect, useState } from "react"
import CategoryModal from "./CategoryModal"
import { getAllCategories, deleteById } from "../utils/CategoryApiFunction"
const CategoryManage = () => {
    const [categories, setCategories] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [selectCategory, setSelectCategory] = useState(null)
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleSelectCategory = (category) => {
        setSelectCategory(category)
        handleOpenModal()
    }
    const handleAddCategory = (category) => {
        setCategories([...category])
    }
    const handleDeleteCategory = async (id) => {
        await deleteById(id)
        setCategories(categories.filter(category => category.id !== id))
    }
    useEffect(() => {
        getAllCategories()
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])
    return (
        <>
            <div className="flex flex-col items-center w-full pt-20 bg-gray-100">
                <div className="w-2/3 translate-y-1/2">
                    <div className="font-bold text-xl text-white bg-black py-6 px-6 rounded-xl w-full mx-4">Danh sách category</div>
                </div>
                <div className="w-3/4 rounded-xl py-20 bg-white shadow-lg">
                    <span onClick={handleOpenModal} className="font-semibold p-4 bg-blue-500 text-white ml-4 rounded-lg cursor-pointer">Thêm mới category</span>
                    <table className="table-auto w-full min-w-[640px] bg-white mt-4">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Tên category</p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Category cha</p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map(category => (
                                    <tr onClick={()=>handleSelectCategory(category)} key={category.id} className="hover:bg-gray-100 cursor-pointer">
                                        <td className="py-3 px-5 border-b border-blue-gray-50">{category.name}</td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">{category.parentCategory}</td>
                                        <td onClick={(e) => {
                                            e.stopPropagation()
                                            handleDeleteCategory(category.id)
                                        }} className="py-3 px-5 border-b border-blue-gray-50 text-red-600 hover:underline">Xóa</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <CategoryModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                selectCategory={selectCategory}
                setSelectCategory={setSelectCategory}
                handleAddCategory={handleAddCategory}
            />
        </>
    )
}
export default CategoryManage