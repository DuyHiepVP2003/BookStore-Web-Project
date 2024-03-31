const RegisterForm = () => {
    return (
        <div className="flex flex-col w-1/3">
            <label className="mb-2 mt-4" htmlFor="email">Email</label>
            <input required className="my-2 outline-none border border-gray-200 rounded-md px-4 py-2 focus:border-blue-500 focus:shadow-md" type="email" name="email" id="email" placeholder="Nhập email của bạn" />
            <label className="mb-2 mt-4" htmlFor="password">Mật khẩu</label>
            <input required className="my-2 outline-none border border-gray-200 rounded-md px-4 py-2 focus:border-blue-500 focus:shadow-md" type="password" name="password" id="password" placeholder="Nhập mật khẩu" />
            <label className="mb-2 mt-4" htmlFor="password">Xác nhận mật khẩu</label>
            <input required className="my-2 outline-none border border-gray-200 rounded-md px-4 py-2 focus:border-blue-500 focus:shadow-md" type="password" name="confirmPassword" id="confirmPassword" placeholder="Xác nhận mật khẩu" />
            <div className="font-bold text-white bg-red-700 px-4 py-2 rounded-md w-1/2 text-center mx-auto mt-5 cursor-pointer">Đăng ký</div>
        </div>
    )
}
export default RegisterForm