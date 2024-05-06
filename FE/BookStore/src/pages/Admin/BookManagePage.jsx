import BookManage from "../../components/AdminMainContent/BookManage"
import { useState } from "react"
import BookModal from "../../components/AdminMainContent/BookModal"
import AdminNav from "../../components/AdminSideBar/AdminNav"
const BookManagePage = () => {
    const [addNew, setAddNew] = useState(false)
    return (
        <>
            <div className="flex">
                <AdminNav />
                {
                    addNew ? <BookModal setAddNew={setAddNew} /> : <BookManage setAddNew={setAddNew} />
                }
            </div>
        </>
    )
}
export default BookManagePage