import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { verifyUser } from "../../components/utils/AuthApiFunction"

const SuccessPage = () => {
    const location = useLocation()
    useEffect(() => {
        const param = new URLSearchParams(location.search)
        const code = param.get('code')
        verifyUser(code)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => { })
    }, [])
    return (
        <div class="flex justify-center items-center">
            <div class="bg-white p-8 rounded shadow-lg text-center mt-10 w-96">
                <i class="fa-regular fa-circle-check fa-5x text-green-700 mb-5"></i>
                <h1 class="text-3xl font-semibold mb-4">Thank you!</h1>
                <p class="text-gray-700 mb-4">Verify account success!</p>
                <a class="text-blue-500 hover:underline">Login now</a><br />
                <a class="text-blue-500 hover:underline">Go back to homepage</a>
            </div>
        </div>
    )
}
export default SuccessPage