import { PiSquaresFour } from "react-icons/pi";
import { FaAngleDown, FaSearch, FaRegUser } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="max-w-screen-xl  mx-auto flex items-center justify-between py-3">
                <Link to="/" className="font-bold text-3xl text-red-700 cursor-pointer">BOOKSTORE.COM</Link>
                <div className="flex items-center cursor-pointer mx-5">
                    <PiSquaresFour className="text-5xl text-gray-500" />
                    <FaAngleDown className="text-xl text-gray-500" />
                </div>
                <div className="flex-grow">
                    <div className="flex justify-between items-center py-1 px-6 border border-solid rounded-lg">
                        <input type="text" placeholder="Some text" className="outline-none" />
                        <div className="flex items-center">
                            <div className="text-white bg-red-700 cursor-pointer text-2xl rounded-md px-6 py-2 ml-4">
                                <FaSearch />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mx-2 cursor-pointer items-center">
                    <BiBell className="text-2xl text-gray-500" />
                    <div className="text-gray-500">Thông báo</div>
                </div>
                <Link to="/cart" className="flex flex-col mx-2 cursor-pointer items-center">
                    <FiShoppingCart className="text-2xl text-gray-500" />
                    <div className="text-gray-500">Giỏ hàng</div>
                </Link>
                <Link to="/login" className="flex flex-col mx-2 cursor-pointer items-center">
                    <FaRegUser className="text-2xl text-gray-500" />
                    <div className="text-gray-500">Tài khoản</div>
                </Link>
            </div>

        </div>
    )
}
export default Navbar