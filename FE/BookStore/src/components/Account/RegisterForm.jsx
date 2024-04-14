import { useState } from "react"
import { saveNewCustomer } from "../utils/CustomerApiFunction"

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'USER'
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const handleInputChange = (e) => {
        let { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        setError('')
    }
    const handleRegister = async () => {
        if (confirmPassword !== formData.password) {
            setError('Passwords do not match')
        }
        else {
            const responseMessage = await saveNewCustomer(formData)
            if (responseMessage.status === 'ERROR'){
                setError('Email exist')
            }
            else {
                alert('Success')
            }
        }
    }
    return (
        <div className="flex flex-col w-1/3">
            <label className="mb-2 mt-4" htmlFor="email">Email</label>
            <input onChange={handleInputChange} required className="my-2 outline-none border border-gray-200 rounded-md px-4 py-2 focus:border-blue-500 focus:shadow-md" type="email" name="email" id="email" placeholder="Nhập email của bạn" />
            {error === 'Email exist' && <div className="text-red-600">Email đã tồn tại</div>}
            <label className="mb-2 mt-4" htmlFor="password">Mật khẩu</label>
            <input onChange={handleInputChange} required className="my-2 outline-none border border-gray-200 rounded-md px-4 py-2 focus:border-blue-500 focus:shadow-md" type="password" name="password" id="password" placeholder="Nhập mật khẩu" />
            <label className="mb-2 mt-4" htmlFor="password">Xác nhận mật khẩu</label>
            <input onChange={(e) => {
                setConfirmPassword(e.target.value)
            }} required className="my-2 outline-none border border-gray-200 rounded-md px-4 py-2 focus:border-blue-500 focus:shadow-md" type="password" name="confirmPassword" id="confirmPassword" placeholder="Xác nhận mật khẩu" />
            {error === 'Passwords do not match' && <div className="text-red-600">Mật khẩu không khớp</div>}
            <button onClick={handleRegister} className="font-bold text-white bg-red-700 px-4 py-2 rounded-md w-1/2 text-center mx-auto mt-5 cursor-pointer">Đăng ký</button>
        </div>
    )
}
export default RegisterForm