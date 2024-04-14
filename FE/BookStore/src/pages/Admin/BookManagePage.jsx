import SideBar from "../../components/AdminSideBar/SideBar"
import { LuLayoutDashboard } from "react-icons/lu"
import SideBarItem from "../../components/AdminSideBar/SideBarItem"
import BookManage from "../../components/AdminMainContent/BookManage"
import { useState } from "react"
import BookModal from "../../components/AdminMainContent/BookModal"
const BookManagePage = () => {
    const [addNew, setAddNew] = useState(false)
    return (
        <>
            <div className="flex">
                <SideBar className="w-1/5">
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Book" />
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Category" />
                    <SideBarItem icon={<LuLayoutDashboard size={20} />} text="Customer" />
                </SideBar>
                {
                    addNew ? <BookModal setAddNew={setAddNew} /> : <BookManage setAddNew={setAddNew} />
                }
            </div>
        </>
    )
}
export default BookManagePage