import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import ListCartItem from "./ListCartItem"
import useStore from "../../zustand/cart"
import EmptyCart from "./EmptyCart"
const CartPage = () => {
    const cart = useStore((state) => state.cart)
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-screen-xl mx-auto text-2xl mt-5">GIỎ HÀNG ({cart.length} sản phẩm)</div>
            { cart.length > 0 ? <ListCartItem /> : <EmptyCart/>}
            <Footer />
        </div>
    )
}
export default CartPage