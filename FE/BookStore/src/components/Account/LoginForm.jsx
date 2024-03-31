const LoginForm = () => {
    return (
        <div className="flex flex-col w-1/3">
            <label className="mb-2 mt-4" htmlFor="email">Email</label>
            <input className="my-2 outline-none border border-gray-200 rounded-md px-4 py-2" type="email" name="email" id="email" placeholder="Nhập email của bạn" />
            <label className="mb-2 mt-4" htmlFor="password">Mật khẩu</label>
            <input className="my-2 outline-none border border-gray-200 rounded-md px-4 py-2" type="password" name="password" id="password" placeholder="Nhập mật khẩu" />
            <div className="text-right text-red-700 cursor-pointer">Quên mật khẩu?</div>
            <div className="font-bold text-white bg-red-700 px-4 py-2 rounded-md w-1/2 text-center mx-auto mt-5 cursor-pointer">Đăng nhập</div>
        </div>
    )
}
export default LoginForm