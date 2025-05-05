import { Link } from "react-router-dom"

const SideBarItem = ({ icon, text }) => {
    return (
        <Link to={`/admin/${text}`} className="flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors hover:bg-red-500 hover:text-white">
            {icon}
            <span className="w-52 ml-3">{text}</span>
        </Link>
    )
}
export default SideBarItem