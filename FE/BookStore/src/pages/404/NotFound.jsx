import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center py-9">
      <Link to='/' className="text-white w-40 bg-red-600 text-center py-3 cursor-pointer">Quay về trang chủ</Link>
      <img className="w-1/2" srcSet="https://code.ptit.edu.vn/2020/images/download%20(1)@3x.png" alt="Not Found" />
      <p className="text-xl font-semibold text-red-600">Not Found!</p>
    </div>
  )
}
export default NotFound