import { useState } from "react"
import LoginForm from "../../components/Account/LoginForm"
import RegisterForm from "../../components/Account/RegisterForm"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

const Login = () => {
  const [loginMode, setLoginMode] = useState(true)
  const changeLoginMode = () => {
    setLoginMode(true)
  }
  const changeRegisterMode = () => {
    setLoginMode(false)
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="bg-white max-w-screen-xl mx-auto mt-2 mb-10 py-10">
          <div className="flex flex-col items-center justify-center">
            <div className="flex">
              <div onClick={changeLoginMode} className={`py-2 px-10 hover:text-red-700 hover:border-b hover:border-red-700 ${loginMode ? 'text-red-700' : ''}`}>Đăng nhập</div>
              <div onClick={changeRegisterMode} className={`py-2 px-10 hover:text-red-700 hover:border-b hover:border-red-700 ${!loginMode ? 'text-red-700' : ''}`}>Đăng ký</div>
            </div>
            {loginMode ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Login