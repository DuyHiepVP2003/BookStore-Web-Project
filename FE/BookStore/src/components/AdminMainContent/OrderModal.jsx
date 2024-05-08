import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { changeOrderStatus, getOrderById } from "../utils/OrderApiFunction"
const OrderModal = () => {
  const [order, setOrder] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    total: '',
    address: '',
    checkOut: false,
    orderItems: []
  })
  const { _id } = useParams()
  const handleChangeStatus = async () => {
    await changeOrderStatus(_id)
    alert("Cập nhật trạng thái đơn hàng thành công")
  }
  useEffect(() => {
    getOrderById(_id)
      .then((res) => {
        console.log(res.data)
        setOrder(res.data)
      })
  }, [order])
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-semibold ml-10 mt-10">Chi tiết đơn hàng</h1>
      <Link to='/admin/Order' className="ml-10 mt-5 cursor-pointer font-semibold bg-red-600 text-white border rounded-lg w-40 p-2 text-center">Quay lại</Link>
      <div className="px-10" >
        <div className="flex">
          <div className="w-1/2">
            <div className="mt-5 flex items-center">
              <label className="min-w-40 mr-4 font-semibold">Họ khách hàng</label>
              <input readOnly required type="text" name="firstName" value={order.firstName} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
            </div>
            <div className="mt-5 flex items-center">
              <label className="min-w-40 mr-4 font-semibold">Tên khách hàng</label>
              <input readOnly required type="text" name="lastName" value={order.lastName} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
            </div>
            <div className="mt-5 flex items-center">
              <label className="min-w-40 mr-4 font-semibold">Email</label>
              <input readOnly required type="email" name="email" value={order.email} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
            </div>
            <div className="mt-5 flex items-center">
              <label className="min-w-40 mr-4 font-semibold">Số điện thoại</label>
              <input readOnly type="text" name="phoneNumber" value={order.phoneNumber} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="mt-5 flex items-center">
              <label className="min-w-40 mr-4 font-semibold">Địa chỉ</label>
              <input readOnly type="text" name="address" value={order.address} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
            </div>
            <div className="mt-5 flex items-center">
              <label className="min-w-40 mr-4 font-semibold">Tổng tiền</label>
              <input readOnly type="text" name="total" value={`${order.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ`} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
            </div>
            <div className="mt-5 flex items-center">
              <label className="min-w-40 mr-4 font-semibold">Trạng thái</label>
              <input readOnly type="text" name="size" value={order.checkOut ? "Đã xác nhận" : "Chưa xác nhận"} className="p-2 w-1/2 outline-none border border-gray-200 rounded-md" />
            </div>
          </div>
        </div>
        <table className="table-auto w-full min-w-[640px] bg-white mt-4">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Tên sách</p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Số lượng mua</p>
              </th>
              <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Giá mua</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              order.orderItems.map((orderItem) => (
                <tr className="hover:bg-gray-100 cursor-pointer">
                  <td className="py-3 px-5 border-b border-blue-gray-50">{orderItem.book.name}</td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">{orderItem.quantity}</td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">{orderItem.book.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <button onClick={handleChangeStatus} className="mt-5 cursor-pointer font-semibold bg-blue-600 text-white border rounded-lg p-2 text-center">
          {order.checkOut ? "Đơn hàng chưa xác nhận" : "Xác nhận đơn hàng"}
        </button>
      </div>
    </div>
  )
}
export default OrderModal