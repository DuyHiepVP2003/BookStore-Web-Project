import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import ListCartItem from "./ListCartItem"
const CartPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-screen-xl mx-auto text-2xl mt-5">GIỎ HÀNG (2 sản phẩm)</div>
            <ListCartItem />
            <Footer />
        </div>
    )
}
export default CartPage