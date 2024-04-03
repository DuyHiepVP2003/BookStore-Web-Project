import { useEffect, useState } from "react"
import { getAllAuthor } from "../utils/AuthorApiFunction"
import { getAllCategories } from "../utils/CategoryApiFunction"
import { getAllPublishers } from "../utils/PublisherApiFunction"
import { Link, useParams, useNavigate } from "react-router-dom"
import { getBookById, saveNewBook, updateById } from "../utils/BookApiFunction"

const BookModal = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        publicYear: '',
        language: '',
        weight: '',
        size: '',
        pageNumber: '',
        form: '',
        image: '',
        price: '',
        discount: '',
        ageMin: '',
        description: '',
        quantity: '',
        sellQuantity: '',
        author: { id: '' },
        publisher: { id: '' },
        category: { id: '' },
    })
    const [authors, setAuthors] = useState([])
    const [categories, setCategories] = useState([])
    const [publishers, setPublishers] = useState([])
    let { _id } = useParams()
    const handleInitialFormData = () => {
        if (_id) {
            getBookById(_id)
                .then((res) => {
                    setFormData(res.data)
                    console.log(res.data)
                }).catch((err) => {
                    console.error(err)
                })
        } else {
            setFormData({
                name: '',
                publicYear: '',
                language: '',
                weight: '',
                size: '',
                pageNumber: '',
                form: '',
                image: '',
                price: '',
                discount: '',
                ageMin: '',
                description: '',
                quantity: '',
                sellQuantity: '',
                author: { id: 0 },
                publisher: { id: 0 },
                category: { id: 0 },
            })
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === 'author' || name === 'category' || name === 'publisher') {
            setFormData(prevData => ({
                ...prevData,
                [name]: { id: parseInt(value) },
            }))
        }
        else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value,
            }))
        }
    }
    const handleSubmitForm = async (e) => {
        e.preventDefault()
        if (_id) {
            const newBook = await updateById(_id, formData)
        }
        else {
            const newBook = await saveNewBook(formData)
        }
        navigate('/admin/Book')
    }
    useEffect(() => {
        getAllAuthor()
            .then((res) => {
                setAuthors(res.data)
            }).catch((err) => {
                console.error(err)
            })
        getAllCategories()
            .then((res) => {
                setCategories(res.data)
            }).catch((err) => {
                console.error(err)
            })
        getAllPublishers()
            .then((res) => {
                setPublishers(res.data)
            }).catch((err) => {
                console.error(err)
            })
        handleInitialFormData()
    }, [])
    return (
        <div className="flex flex-col w-full">
            <h1 className="text-2xl font-semibold ml-10 mt-10">Thêm sách mới</h1>
            <Link to='/admin/Book' className="ml-10  mt-5 cursor-pointer font-semibold bg-red-600 text-white border rounded-lg w-40 p-2 text-center">Quay lại</Link>
            <form onSubmit={handleSubmitForm} className="px-10" >
                <div className="flex">
                    <div className="w-1/2">
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Tên</label>
                            <input onChange={handleInputChange} required type="text" value={formData.name} name="name" className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Năm phát hành</label>
                            <input onChange={handleInputChange} type="text" value={formData.publicYear} name="publicYear" className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Ngôn ngữ</label>
                            <input onChange={handleInputChange} type="text" value={formData.language} name="language" className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Cân nặng</label>
                            <input onChange={handleInputChange} type="text" value={formData.weight} name="weight" className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Kích thước</label>
                            <input onChange={handleInputChange} type="text" value={formData.size} name="size" className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Số trang</label>
                            <input onChange={handleInputChange} type="text" value={formData.pageNumber} name="pageNumber" className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Kiểu dáng</label>
                            <input onChange={handleInputChange} type="text" value={formData.form} name="form" className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Link ảnh</label>
                            <input onChange={handleInputChange} required type="text" value={formData.image} name="image" className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Giá</label>
                            <input onChange={handleInputChange} required type="text" value={formData.price} name="price" className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Giảm giá</label>
                            <input onChange={handleInputChange} type="text" name="discount" value={formData.discount} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Độ tuổi</label>
                            <input onChange={handleInputChange} required type="text" value={formData.ageMin} name="ageMin" className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Mô tả</label>
                            <input onChange={handleInputChange} type="text" name="description" value={formData.description} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Số lượng</label>
                            <input onChange={handleInputChange} type="number" name="quantity" value={formData.quantity} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                        <div className="mt-5 flex items-center">
                            <label className="min-w-40 mr-4 font-semibold">Số lượng đã bán</label>
                            <input onChange={handleInputChange} type="number" name="sellQuantity" value={formData.sellQuantity} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <label className="min-w-40 mr-4 font-semibold">Tác giả</label>
                    <select onChange={handleInputChange} name="author" value={formData.author.id}>
                        <option value={null}>-------</option>
                        {authors.map(author => (
                            <option key={author.id} value={author.id}>{author.name}</option>
                        ))}
                    </select>
                    <label className="min-w-40 mx-4 font-semibold">Nhà xuất bản</label>
                    <select onChange={handleInputChange} name="publisher" value={formData.publisher.id}>
                        <option value={null}>-------</option>
                        {publishers.map(publisher => (
                            <option key={publisher.id} value={publisher.id}>{publisher.name}</option>
                        ))}
                    </select>
                    <label className="min-w-40 mx-4 font-semibold">Danh mục</label>
                    <select onChange={handleInputChange} name="category" value={formData.category.id}>
                        <option value={null}>-------</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="mt-5 cursor-pointer font-semibold bg-blue-600 text-white border rounded-lg w-40 p-2 text-center">Thêm mới</button>
            </form>
        </div>
    )
}
export default BookModal
