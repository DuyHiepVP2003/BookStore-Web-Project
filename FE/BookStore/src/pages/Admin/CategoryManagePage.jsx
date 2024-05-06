import CategoryManage from "../../components/AdminMainContent/CategoryManage"
import AdminNav from "../../components/AdminSideBar/AdminNav"
const CategoryManagePage = () => {
    return (
        <>
            <div className="flex">
                <AdminNav />
                <CategoryManage className="w-4/5" />
            </div>
        </>
    )
}
export default CategoryManagePage