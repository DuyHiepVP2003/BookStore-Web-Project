import { Link } from "react-router-dom"

const EmptyCart = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-5 flex">
            <div className="bg-white w-full flex flex-col items-center py-10">
                <div className="my-3">
                    <img alt="" srcset="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg" />
                </div>
                <p className="my-3">Chưa có sản phẩm trong giỏ hàng của bạn</p>
                <Link to="/product_search" className="my-3 text-white bg-red-600 py-2 px-3 rounded-lg font-semibold cursor-pointer">Mua sắm ngay</Link>
            </div>
        </div>
    )
}
export default EmptyCart