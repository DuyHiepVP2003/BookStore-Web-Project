import { useState, useEffect } from "react"
import { getAllCustomers } from "../utils/CustomerApiFunction"
import CustomerModal from "./CustomerModal"
const CustomerManage = () => {
  const [customers, setCustomer] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectCustomer, setSelectCustomer] = useState(null)
  const handleShowModal = () => {
    setOpenModal(!openModal)
  }
  const handleAddCustomer = (newCustomer) => {
    setCustomer([...customers, newCustomer])
  }
  const handleDeleteCustomer = async (id) => {
    await deleteById(id)
    setCustomer(customers.filter(customer => customer.id !== id))
  }
  const handleSelectCustomer = (selectCustomer) => {
    setSelectCustomer(selectCustomer)
    handleShowModal()
  }
  useEffect(() => {
    getAllCustomers()
      .then((res) => {
        setCustomer(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <>
      <div className="flex flex-col items-center w-full pt-20 bg-gray-100">
        <div className="w-2/3 translate-y-1/2">
          <div className="font-bold text-xl text-white bg-black py-6 px-6 rounded-xl w-full mx-4">Danh sách khách hàng</div>
        </div>
        <div className="w-3/4 rounded-xl py-20 bg-white shadow-lg">
          <span onClick={handleShowModal} className="font-semibold p-4 bg-blue-500 text-white ml-4 rounded-lg cursor-pointer">Thêm mới khách hàng</span>
          <table className="table-auto w-full min-w-[640px] bg-white mt-4">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Tên khách hàng</p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Email</p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Địa chỉ</p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-gray-400 ">Số điện thoại</p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                </th>
              </tr>
            </thead>
            <tbody>
              {
                customers.map(customer => (
                  <tr onClick={() => handleSelectCustomer(customer)} key={customer.id} className="hover:bg-gray-100 cursor-pointer">
                    <td className="py-3 px-5 border-b border-blue-gray-50">{customer.name}</td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">{customer.email}</td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">{customer.address}</td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">{customer.phoneNumber}</td>
                    <td onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteCustomer(customer.id)
                    }} className="py-3 px-5 border-b border-blue-gray-50 text-red-600 hover:underline">Xóa</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <CustomerModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleAddCustomer={handleAddCustomer}
        selectCustomer={selectCustomer}
        setSelectCustomer={setSelectCustomer}
      />
    </>
  )
}
export default CustomerManage