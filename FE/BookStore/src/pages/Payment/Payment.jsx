import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import CartItem from "../Cart/CartItem"
import useStore from "../../zustand/cart"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import useAuthStore from "../../zustand/customer"
import { getAllOrder, saveNewOrder } from "../../components/utils/OrderApiFunction"
const Payment = () => {
    const [payment, setPayment] = useState(0)
    const user = useAuthStore((state) => state.user)
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address
    })
    const cart = useStore((state) => state.cart)
    const clearCart = useStore((state) => state.clearCart)
    const navigate = useNavigate()
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCustomer({
            ...customer,
            [name]: value
        })
    }
    const handleConfirmPayment = (e) => {
        const orderRequest = {
            ...customer,
            'total': payment,
            orderItems: cart
        }
        saveNewOrder(orderRequest).then((res) => {
            alert("thanh toan thanh cong")
            clearCart()
            navigate('/')
        })
            .catch((err) => {
                console.log(err)
                alert("thanh toan that bai")
            })
    }
    useEffect(() => {
        const cartValue = cart.reduce((total, cartItem) => total + parseInt(cartItem.book.price) * cartItem.quantity, 0)
        setPayment(cartValue)
    }, [])
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-screen-xl mx-auto mt-5 flex">
                <div className="mr-5 bg-white p-3 rounded-lg w-1/2">
                    <h1 className="text-xl font-semibold">Thông tin tài khoản</h1>
                    <div className="container mx-auto flex mb-4">
                        <div className="w-1/2 mr-3">
                            <label className="block text-gray-700">Họ</label>
                            <input onChange={handleInputChange} name="firstName" value={customer.firstName} type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="w-1/2 mr-3">
                            <label className="block text-gray-700">Tên</label>
                            <input onChange={handleInputChange} name="lastName" value={customer.lastName} type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input onChange={handleInputChange} name="email" value={customer.email} type="email" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Số điện thoại</label>
                        <input onChange={handleInputChange} name="phoneNumber" value={customer.phoneNumber} type="number" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Địa chỉ</label>
                        <input onChange={handleInputChange} name="address" value={customer.address} type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>
                <div className="bg-white p-3 rounded-lg w-1/2 h-min">
                    {
                        cart.map((cartItem) => (
                            <CartItem book={cartItem.book} itemQuantity={cartItem.quantity} />
                        ))
                    }
                    <div className="flex justify-between mt-2 text-xl">
                        <p className="font-semibold">Tổng số tiền</p>
                        <p className="text-red-700 font-bold">{payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p>
                    </div>
                    <button onClick={handleConfirmPayment} className="text-white bg-red-600 font-bold mt-3 py-2 cursor-pointer w-full rounded-lg">THANH TOÁN</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Payment