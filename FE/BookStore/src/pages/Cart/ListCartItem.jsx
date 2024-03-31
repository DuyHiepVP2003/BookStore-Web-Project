import CartItem from "./CartItem"

const ListCartItem = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-5 flex">
            <div className="mr-5 bg-white p-3 rounded-lg w-2/3">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="bg-white p-3 rounded-lg w-1/3 h-min">
                <div className="border-b pb-2 flex justify-between">
                    <p>Thành tiền</p>
                    <p>342.000 đ</p>
                </div>
                <div className="flex justify-between mt-2 text-xl">
                    <p className="font-semibold">Tổng số tiền</p>
                    <p className="text-red-700 font-bold">342.000 đ</p>
                </div>
                <button className="text-white bg-red-600 font-bold mt-3 py-2 cursor-pointer w-full rounded-lg">THANH TOÁN</button>
            </div>
        </div>
    )
}
export default ListCartItem