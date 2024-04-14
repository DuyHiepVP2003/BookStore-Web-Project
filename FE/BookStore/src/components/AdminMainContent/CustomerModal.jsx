import { useState, useEffect } from "react"
import { saveNewCustomer, updateById } from "../utils/CustomerApiFunction"
const CustomerModal = ({
  openModal,
  setOpenModal,
  handleAddCustomer,
  selectCustomer,
  setSelectCustomer
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    password: '',
    role: 'USER'
  })
  const handleInputChange = (e) => {
    let { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const closeModal = () => {
    setOpenModal(false)
    setSelectCustomer(null)
  }
  const handleSubmitForm = async () => {
    if (selectCustomer) {
      const response = await updateById(selectCustomer.id, formData)
    } else {
      const response = await saveNewCustomer(formData)
    }
    handleAddCustomer(response.data)
    closeModal()
  }
  useEffect(() => {
    if (selectCustomer) {
      setFormData({
        name: selectCustomer.name,
        email: selectCustomer.email,
        address: selectCustomer.address,
        phoneNumber: selectCustomer.phoneNumber,
        password: selectCustomer.password,
        role: selectCustomer.role
      })
    }
    else {
      setFormData({
        name: '',
        email: '',
        address: '',
        phoneNumber: '',
        password: '',
        role: 'USER'
      })
    }
  }, [selectCustomer])
  return (
    openModal &&
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
      <form onSubmit={handleSubmitForm} className="bg-white rounded-lg p-8 flex flex-col w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Thêm mới khách hàng</h2>
        <label className="mb-2 font-semibold">Tên khách hàng</label>
        <input value={formData.name} onChange={handleInputChange} required type="text" name="name" className="mb-2 p-3 outline-none border border-gray-200 rounded-md" />
        <label className="mb-2 font-semibold">Email</label>
        <input value={formData.email} onChange={handleInputChange} required type="email" name="email" className="mb-2 p-3 outline-none border border-gray-200 rounded-md" />
        <label className="mb-2 font-semibold">Số điện thoại</label>
        <input value={formData.phoneNumber} onChange={handleInputChange} required type="text" name="phoneNumber" className="mb-2 p-3 outline-none border border-gray-200 rounded-md" />
        <label className="mb-2 font-semibold">Địa chỉ</label>
        <input value={formData.address} onChange={handleInputChange} required type="text" name="address" className="mb-2 p-3 outline-none border border-gray-200 rounded-md" />
        <label className="mb-2 font-semibold">Mật khẩu</label>
        <input value={formData.password} onChange={handleInputChange} required type="password" name="password" className="mb-2 p-3 outline-none border border-gray-200 rounded-md" />
        <label className="mb-2 font-semibold">Role</label>
        <input value={formData.role} onChange={handleInputChange} required type="text" name="role" className="mb-4 p-3 outline-none border border-gray-200 rounded-md" />
        <div className="flex mt-4">
          <button onClick={closeModal} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md w-1/2 mx-2">Đóng</button>
          <button type="submit" className="bg-blue-500 text-white hover:bg-blue-300 px-4 py-2 rounded-md w-1/2 mx-2">
            {selectCustomer ? "Cập nhật" : "Thêm mới"}
          </button>
        </div>
      </form>
    </div>
  )
}
export default CustomerModal