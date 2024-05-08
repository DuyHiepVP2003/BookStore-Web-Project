import { useEffect, useState } from "react"
import { deleteOrderById, getAllOrder } from "../utils/OrderApiFunction"
import { useNavigate } from "react-router-dom"

const OrderManage = () => {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()
    const handleShowOrderDetail = (id) => {
        navigate(`/admin/Order/${id}`)
    }   
    const handleDeleteOrder = async (id) => {
        await deleteOrderById(id)
        setOrders(orders.filter(order => order.id !== id))
    }
    useEffect(() => {
        getAllOrder()
            .then((res) => {
                setOrders(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])
    return (
        <>
            <div className="flex flex-col items-center w-full pt-20 bg-gray-100">
                <div className="w-2/3 translate-y-1/2">
                    <div className="font-bold text-xl text-white bg-black py-6 px-6 rounded-xl w-full mx-4">Danh sách đơn hàng</div>
                </div>
                <div className="w-3/4 rounded-xl py-20 bg-white shadow-lg">
                    <table className="table-auto w-full min-w-[640px] bg-white mt-4">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Email</p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Số điện thoại</p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Địa chỉ</p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Tổng giá tiền</p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                    <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Trạng thái</p>
                                </th>
                                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => (
                                    <tr onClick={() => { handleShowOrderDetail(order.id) }} key={order.id} className="hover:bg-gray-100 cursor-pointer">
                                        <td className="py-3 px-5 border-b border-blue-gray-50">{order.email}</td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">{order.phoneNumber}</td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">{order.address}</td>
                                        <td className="py-3 px-5 border-b border-blue-gray-50">{order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</td>
                                        <td className={`py-3 px-5 border-b font-bold border-blue-gray-50 ${order.checkOut ? "text-green-500" : "text-red-600"}`}>{order.checkOut ? "Đã xác nhận" : "Chưa xác nhận"}</td>
                                        <td onClick={(e)=>{
                                            e.stopPropagation();
                                            handleDeleteOrder(order.id)
                                        }} className="py-3 px-5 border-b border-blue-gray-50 text-red-600 hover:underline">Xóa</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default OrderManage