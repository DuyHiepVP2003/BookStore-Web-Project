import { PiSquaresFour } from "react-icons/pi";
import { FaAngleDown, FaSearch, FaRegUser } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuthStore from "../../zustand/customer";
import { useEffect, useState } from "react";
import useBookStore from "../../zustand/book";
const Navbar = () => {
    const user = useAuthStore((state) => state.user)
    const [showSearchEngine, setShowSearchEngine] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const books = useBookStore((state) => state.books)
    const fetchBooks = useBookStore((state) => state.fetchBooks)
    const [result, setResult] = useState([])
    const handleSearchInputChange = (e) => {
        const query = e.target.value
        setSearchQuery(query)
        const bookQueryResult = books.filter(book => book.name.toLowerCase().includes(query.toLowerCase()))
        const authorQueryResult = books.filter(book => book.author.toLowerCase().includes(query.toLowerCase()))
        const queryResult = [...bookQueryResult, ...authorQueryResult].slice(0,5)
        setResult(queryResult)
        setShowSearchEngine(true)
    }
    useEffect(() => {
        fetchBooks()
    }, [])
    return (
        <>
            <div className="bg-white relative">
                <div className="max-w-screen-xl  mx-auto flex items-center justify-between py-3">
                    <Link to="/" className="font-bold text-3xl text-red-700 cursor-pointer mr-10">BOOKSTORE.COM</Link>
                    <div className="flex-grow px-20">
                        <div className="flex justify-between items-center py-1 pl-6 pr-1 border border-solid rounded-lg">
                            <input onChange={handleSearchInputChange} value={searchQuery} type="text" placeholder="Tìm kiếm" className="outline-none" />
                            <Link to='/product_search' className="flex items-center">
                                <div className="text-white bg-red-700 cursor-pointer text-2xl rounded-md px-6 py-2 ml-4">
                                    <FaSearch />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <Link to="/cart" className="flex flex-col mx-2 cursor-pointer items-center">
                        <FiShoppingCart className="text-2xl text-gray-500" />
                        <div className="text-gray-500">Giỏ hàng</div>
                    </Link>
                    <Link to={user ? '/customer' : '/login'} className="flex flex-col mx-2 cursor-pointer items-center">
                        <FaRegUser className="text-2xl text-gray-500" />
                        <div className="text-gray-500">Tài khoản</div>
                    </Link>
                </div>
            </div>
            {showSearchEngine &&
                <div onClick={() => {
                    setShowSearchEngine(false)
                }} className="absolute w-full h-full flex justify-center">
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }}
                        className="bg-white w-1/2 h-min p-5">
                        {
                            result.map(book => (
                                <Link to={`/product_detail/${book.id}`} className="flex cursor-pointer">
                                    <img className=" w-28" alt="" srcset={book.image} />
                                    <p className="flex-1">{book.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
}
export default Navbar