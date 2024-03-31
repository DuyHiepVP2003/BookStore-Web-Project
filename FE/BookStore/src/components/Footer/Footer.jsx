import { Link } from "react-router-dom"
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-white max-w-screen-xl mx-auto py-10 px-2 flex mt-10">
            <div className="w-1/3 px-2 border-r ">
                <Link to="/" className="font-bold text-3xl text-red-700 cursor-pointer">BOOKSTORE.COM</Link>
                <p className="text-sm mt-5">Bookstore.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.</p>
                <div className="flex items-center mt-5">
                    <FaFacebook className="mr-2 text-2xl cursor-pointer" />
                    <FaSquareInstagram className="mr-2 text-2xl cursor-pointer" />
                    <FaYoutube className="mr-2 text-2xl cursor-pointer" />
                    <FaTwitter className="mr-2 text-2xl cursor-pointer" />
                </div>
            </div>
            <div className="w-2/3 flex flex-wrap">
                <div className="w-1/4 flex items-center">
                    <img className="w-1/2 mx-auto object-contain max-h-10" alt="" srcSet="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png" />
                </div>
                <div className="w-1/4 flex items-center">
                    <img className="w-1/2 mx-auto object-contain max-h-10" alt="" srcSet="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/ahamove_logo3.png" />
                </div>
                <div className="w-1/4 flex items-center">
                    <img className="w-1/2 mx-auto object-contain max-h-10" alt="" srcSet="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/icon_snappy1.png" />
                </div>
                <div className="w-1/4 flex items-center">
                    <img className="w-1/2 mx-auto object-contain max-h-10" alt="" srcSet="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/Logo_ninjavan.png" />
                </div>
                <div className="w-1/4 flex items-center">
                    <img className="w-1/2 mx-auto object-contain max-h-10" alt="" srcSet="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/vnpay_logo.png" />
                </div>
                <div className="w-1/4 flex items-center">
                    <img className="w-1/2 mx-auto object-contain max-h-10" alt="" srcSet="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/ZaloPay-logo-130x83.png" />
                </div>
                <div className="w-1/4 flex items-center">
                    <img className="w-1/2 mx-auto object-contain max-h-10" alt="" srcSet="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/momopay.png" />
                </div>
                <div className="w-1/4 flex items-center">
                    <img className="w-1/2 mx-auto object-contain max-h-10" alt="" srcSet="https://cdn0.fahasa.com/media//wysiwyg/Logo-NCC/shopeepay_logo.png" />
                </div>
            </div>
        </div>
    )
}
export default Footer