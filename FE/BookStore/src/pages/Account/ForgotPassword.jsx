import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { useState } from "react"
import { checkEmailExists } from "../../components/utils/CustomerApiFunction"
import { useNavigate } from "react-router-dom"
const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const handleSubmit = async () => {
    const res = await checkEmailExists(email)
    if (res.status === 'OK') {
      navigate(`/resetPassword/${res.data}`)
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
          <div className="font-bold text-xl">Nhập email của bạn</div>
          <div className="my-4">
            <label className=" mr-4">Email của bạn</label>
            <input onChange={(e) => {
              setEmail(e.target.value)
            }} className="outline-none border border-gray-200 rounded-md px-4 py-2 w-96" value={email.email} type="email" name="email" />
            {error && <div className="text-red-600 mt-4">{error}</div>}
          </div>
          <div onClick={handleSubmit} className="bg-red-600 text-white text-xl font-semibold px-10 py-2 cursor-pointer border rounded-lg">Xác nhận</div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default ForgotPassword