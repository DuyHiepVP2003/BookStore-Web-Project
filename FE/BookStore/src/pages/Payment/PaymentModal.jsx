const PaymentModal = ({handleConfirmPayment, setOpen}) => {
    return (
        <div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
            <div className="bg-white py-2 px-3 w-1/3">
                <h1 className="font-semibold text-2xl">Thực hiện thanh toán</h1>
                <h2 className="font-semibold">Mã thanh toán</h2>
                <img
                    alt="qr-code"
                    srcSet="https://qrcode-gen.com/images/qrcode-default.png"
                    className="w-60"
                />
                <button onClick={()=> setOpen(false)} className="font-semibold text-white rounded-md bg-blue-600 p-2 mr-2">Quay lại</button>
                <button onClick={handleConfirmPayment} className="font-semibold text-white rounded-md bg-blue-600 p-2">Xác nhận thanh toán</button>
            </div>
        </div>
    )
}
export default PaymentModal