import { Navigate } from "react-router-dom"
import useAuthStore from "../../zustand/customer"

const ProtectedRoute = ({ children }) => {
    const user = useAuthStore((state) => state.user)
    if (!user || user.role !== 'ADMIN') {
        return (
            <Navigate to="/notfoundpage" replace />
        )
    }
    return children
}
export default ProtectedRoute