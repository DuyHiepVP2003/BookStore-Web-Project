import SideBar from "./SideBar"
import SideBarItem from "./SideBarItem"
import { LuLayoutDashboard } from "react-icons/lu"
const AdminNav = () => {
    return (
        <SideBar className="w-1/5">
            <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Book" />
            <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Category" />
            <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Customer" />
            <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Order" />
        </SideBar>
    )
}
export default AdminNav