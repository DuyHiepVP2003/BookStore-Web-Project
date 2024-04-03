import { useState, useEffect } from "react"
import { deleteById, getAllBooks } from "../utils/BookApiFunction"
import { Link } from "react-router-dom"
const BookManage = () => {
    const [books, setBooks] = useState([])
    const handleDeleteItem = async (id) => {
        await deleteById(id)
        setBooks(books.filter(book => book.id !== id))
    }
    useEffect(() => {
        getAllBooks()
            .then((res) => {
                setBooks(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])
    return (
        <>
            <div className="flex flex-col ">
                <div className="bg-black w-1/2 h-min py-4 mt-4 mx-auto rounded-lg text-xl font-semibold text-white text-center">Danh sách sách</div>
                <Link to='/admin/Book/addnew' className="font-semibold w-1/4 my-5 ml-10 p-4 bg-blue-500 text-white rounded-lg cursor-pointer">Thêm mới sách</Link>
                <div className="grid grid-cols-5 gap-4 mx-10">
                    {
                        books.map(book => (
                            <div key={book.id} className="px-2 bg-white border rounded-md overflow-hidden border-none hover:shadow-lg cursor-pointer">
                                <Link to={`/admin/Book/${book.id}`}>
                                    <img className="px-2 py-3 mb-2" alt="anh" srcSet={book.image} />
                                </Link>
                                <div className="text-md font-medium">
                                    <p>{book.name}</p>
                                </div>
                                <p className="mb-2 text-red-600 font-bold">{book.price}</p>
                                <div onClick={() => {
                                    handleDeleteItem(book.id)
                                }} className="text-red-600 font-bold mb-3 cursor-pointer hover:underline">Xóa</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default BookManage