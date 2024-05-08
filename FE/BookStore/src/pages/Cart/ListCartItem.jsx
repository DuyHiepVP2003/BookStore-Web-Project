import CartItem from "./CartItem"
import useStore from "../../zustand/cart"
import { useEffect, useState } from "react"
import useAuthStore from "../../zustand/customer"
import { useNavigate } from "react-router-dom"
const ListCartItem = () => {
    const [payment, setPayment] = useState(0)
    const cart = useStore((state) => state.cart)
    const user = useAuthStore((state) => state.user)
    const navigate = useNavigate()
    const handlePayment = () => {
        user ? navigate('/payment') : navigate('/login')
    }
    useEffect(() => {
        const cartValue = cart.reduce((total, cartItem) => total + parseInt(cartItem.book.price) * cartItem.quantity, 0)
        setPayment(cartValue)
    }, [cart])
    return (
        <div className="max-w-screen-xl mx-auto mt-5 flex">
            <div className="mr-5 bg-white p-3 rounded-lg w-2/3">
                {
                    cart.map((cartItem) => (
                        <CartItem book={cartItem.book} itemQuantity={cartItem.quantity} />
                    ))
                }
            </div>
            <div className="bg-white p-3 rounded-lg w-1/3 h-min">
                <div className="border-b pb-2 flex justify-between">
                    <p>Thành tiền</p>
                    <p>{payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p>
                </div>
                <div className="flex justify-between mt-2 text-xl">
                    <p className="font-semibold">Tổng số tiền</p>
                    <p className="text-red-700 font-bold">{payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</p>
                </div>
                <button onClick={handlePayment} className="text-white bg-red-600 font-bold mt-3 py-2 cursor-pointer w-full rounded-lg">THANH TOÁN</button>
            </div>
        </div>
    )
}
export default ListCartItem