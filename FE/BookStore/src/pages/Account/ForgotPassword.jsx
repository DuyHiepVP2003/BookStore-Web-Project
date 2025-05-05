import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { useState } from "react"
import { checkEmailExists } from "../../components/utils/CustomerApiFunction"
import { useNavigate } from "react-router-dom"
import { resetPassword } from "../../components/utils/AuthApiFunction"
const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async () => {
    const res = await checkEmailExists(email)
    if (res.status === 'OK') {
      setLoading(true)
      resetPassword(email)
        .then((res) => {
          setSuccess(true)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
        })
    }
    else {
      setError('Email không tồn tại')
    }
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="bg-white max-w-screen-xl mx-auto mt-2 mb-10 py-10 flex flex-col items-center">
          <div className="font-bold text-xl mb-4">Nhập email của bạn</div>
          {success &&
            <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <span class="font-medium">Yêu cầu đã được gửi!</span> Hãy xác nhận email của bạn để lấy lại mật khẩu
            </div>
          }
          <div className="mb-4">
            <label className=" mr-4">Email của bạn</label>
            <input onChange={(e) => {
              setError('')
              setEmail(e.target.value)
            }} className="outline-none border border-gray-200 rounded-md px-4 py-2 w-96" value={email.email} type="email" name="email" />
            {error && <div className="text-red-600 mt-4">{error}</div>}
          </div>
          {loading && <div className="text-red-600">Yêu cầu của bạn đang được xử lý</div>}
          {loading ?
            <button className="bg-gray-600 text-white text-xl font-semibold px-10 py-2 border rounded-lg cursor-not-allowed">Xác nhận</button>
            : <button onClick={handleSubmit} className="bg-red-600 text-white text-xl font-semibold px-10 py-2 cursor-pointer border rounded-lg">Xác nhận</button>
          }
        </div>
        <Footer />
      </div>
    </>
  )
}
export default ForgotPassword