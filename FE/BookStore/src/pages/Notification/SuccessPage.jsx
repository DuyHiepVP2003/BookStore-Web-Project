import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { verifyUser } from "../../components/utils/AuthApiFunction"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { FaCheckCircle } from "react-icons/fa";
const SuccessPage = () => {
    const location = useLocation()
    useEffect(() => {
        const param = new URLSearchParams(location.search)
        const code = param.get('code')
        verifyUser(code)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => { })
    }, [])
    return (
        <>
            <Navbar />
            <div class="flex justify-center items-center bg-gray-200">
                <div class="bg-white p-8 rounded shadow-lg text-center my-20 w-96">
                    <FaCheckCircle class="text-5xl text-center w-full text-green-700 mb-5"/>
                    <h1 class="text-3xl font-semibold mb-4">Thank you!</h1>
                    <p class="text-gray-700 mb-4">Xác nhận tài khoản thành công</p>
                    <Link to='/login' class="text-blue-500 hover:underline">Đăng nhập</Link><br />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default SuccessPage