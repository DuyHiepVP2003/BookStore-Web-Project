import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { resetPassword } from "../../components/utils/CustomerApiFunction"
import { getUserByCode } from "../../components/utils/AuthApiFunction"
const ResetPassword = () => {
    const { id } = useParams()
    const [userId, setUserId] = useState(0)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (!id) {
            const param = new URLSearchParams(location.search)
            const code = param.get('code')
            getUserByCode(code)
                .then((res) => {
                    setUserId(res.data)
                })
                .catch((err) => { })
        }
        else setUserId(id)
    }, [])
    const handleSubmit = async () => {
        if (confirmPassword !== password) {
            setError("Mật khẩu không khớp")
        } else {
            const res = await resetPassword(userId, password)
            if (res.status === 'OK') {
                setSuccess(true)
            } else {
                alert('error')
            }
        }
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <div className="bg-white max-w-screen-xl mx-auto mt-2 mb-10 py-10 flex flex-col items-center">
                    <div className="font-bold text-xl mb-4">Nhập mật khẩu mới của bạn</div>
                    {success &&
                        <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span class="font-medium">Đổi mật khẩu thành công!</span>
                        </div>
                    }
                    <div className="my-4">
                        <label className="mr-14">Mật khẩu mới</label>
                        <input onChange={(e) => {
                            setError('')
                            setPassword(e.target.value)
                        }} value={password} className="outline-none border border-gray-200 rounded-md px-4 py-2 w-96" type="password" name="password" />
                    </div>
                    <div className="my-4">
                        <label className="mr-4">Xác nhận mật khẩu</label>
                        <input onChange={(e) => {
                            setError('')
                            setConfirmPassword(e.target.value)
                        }} value={confirmPassword} className="outline-none border border-gray-200 rounded-md px-4 py-2 w-96" type="password" name="confirmPassword" />
                        {error && <div className="text-red-600 mt-4">{error}</div>}
                    </div>
                    <div onClick={handleSubmit} className="bg-red-600 text-white text-xl font-semibold px-10 py-2 cursor-pointer border rounded-lg">Xác nhận</div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default ResetPassword