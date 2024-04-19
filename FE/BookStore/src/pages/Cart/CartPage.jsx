import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import ListCartItem from "./ListCartItem"
import useStore from "../../zustand/cart"
const CartPage = () => {
    const cart = useStore((state) => state.cart)
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-screen-xl mx-auto text-2xl mt-5">GIỎ HÀNG ({cart.length} sản phẩm)</div>
            <ListCartItem />
            <Footer />
        </div>
    )
}
export default CartPage