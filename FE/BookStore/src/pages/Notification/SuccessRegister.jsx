import { Link } from "react-router-dom"

const SuccessRegister = () => {
    return (
        <div class=" flex justify-center items-center">
            <div class="bg-white p-8 rounded shadow-lg text-center mt-10">
                <i class="fa-regular fa-circle-check fa-5x text-green-700 mb-5"></i>
                <h1 class="text-3xl font-semibold mb-4">Thank you!</h1>
                <p class="text-gray-700 mb-4">Please check your email to verify your account!</p>
                <Link to="/" class="text-blue-500 hover:underline">Go back to homepage</Link>
            </div>
        </div>
    )
}
export default SuccessRegister