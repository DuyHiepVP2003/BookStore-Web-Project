import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import useAuthStore from "../../zustand/customer"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { updateById } from "../../components/utils/CustomerApiFunction"
const CustomerDetail = () => {
    const setUser = useAuthStore((state) => state.setUser)
    const user = useAuthStore((state) => state.user)
    const [customer, setCustomer] = useState(user)
    const navigate = useNavigate()
    const handleInputChange = (e) => {
        let {name, value} = e.target
        setCustomer({
            ...customer,
            [name]: value
        })
    }
    const handleSubmit = async () => {
        await updateById(user.id, customer)
        alert("thanh cong")
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <div className="bg-white max-w-screen-xl mx-auto mt-2 mb-10 py-10 pl-10 pr-52">
                    <h1 className="text-2xl font-bold">Thông tin tài khoản</h1>
                    <div className="flex mt-5">
                        <label className="w-1/3">Tên</label>
                        <input onChange={handleInputChange} name="name" value={customer.name ? customer.name : ''} className="flex-1 outline-none border border-gray-400 px-2 py-1 rounded-md" type="text" />
                    </div>
                    <div className="flex mt-5">
                        <label className="w-1/3">Email</label>
                        <input required onChange={handleInputChange} name="email" value={customer.email ? customer.email : ''} className="flex-1 outline-none border border-gray-400 px-2 py-1 rounded-md" type="email" />
                    </div>
                    <div className="flex mt-5">
                        <label className="w-1/3">Số điện thoại</label>
                        <input onChange={handleInputChange} name="phoneNumber" value={customer.phoneNumber ? customer.phoneNumber : ''} className="flex-1 outline-none border border-gray-400 px-2 py-1 rounded-md" type="number" />
                    </div>
                    <div className="flex mt-5">
                        <label className="w-1/3">Địa chỉ</label>
                        <input onChange={handleInputChange} name="address" value={customer.address ? customer.address : ''} className="flex-1 outline-none border border-gray-400 px-2 py-1 rounded-md" type="text" />
                    </div>
                    <div className="flex justify-center">
                        <div onClick={handleSubmit} className="bg-red-600 font-semibold text-white rounded-lg px-7 py-3 mt-5 cursor-pointer">
                            Lưu thay đổi
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div onClick={() => {
                            setUser(null)
                            navigate('/')
                            }} className="bg-red-600 font-semibold text-white rounded-lg px-7 py-3 mt-5 cursor-pointer">
                            Đăng xuất
                        </div>
                    </div>
                </div >
                <Footer />
            </div >
        </>
    )
}
export default CustomerDetail