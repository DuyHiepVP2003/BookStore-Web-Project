import { useState } from "react"
import { registerUser } from "../utils/AuthApiFunction"
import { useNavigate } from "react-router-dom"

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'USER'
    })
    const [loading, setLoading] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const checkInputValid = () => {
        if (formData.email === '' || formData.password === '') {
            setError('Vui lòng nhập toàn bộ thông tin')
            return false
        }
        return true
    }
    const handleInputChange = (e) => {
        let { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        setError('')
    }
    const handleRegister = async () => {
        if (!checkInputValid()) {
            alert("Vui lòng nhập thông tin")
            return
        }
        if (confirmPassword !== formData.password) {
            setError('Passwords do not match')
        }
        else {
            setLoading(true)
            const responseMessage = await registerUser(formData)
            if (responseMessage.status === 'ERROR') {
                setError('Email exist')
                setLoading(false)
            }
            else {
                setLoading(false)
                alert("Đăng ký thành công hãy xác nhận email của bạn để đăng nhập")
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
            {loading && <div className="text-red-600">Yêu cầu của bạn đang được xử lý</div>}
            {loading ?
                <button className="font-bold text-white bg-gray-700 px-4 py-2 rounded-md w-1/2 text-center mx-auto mt-5 cursor-not-allowed">Đăng ký</button>
                : <button onClick={handleRegister} className="font-bold text-white bg-red-700 px-4 py-2 rounded-md w-1/2 text-center mx-auto mt-5 cursor-pointer">Đăng ký</button>
            }
        </div>
    )
}
export default RegisterForm