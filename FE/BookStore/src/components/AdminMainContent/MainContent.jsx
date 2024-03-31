import AuthorManage from "./AuthorManage"
import CategoryManage from "./CategoryManage"
import PublisherManage from "./PublisherManage"
import CustomerManage from "./CustomerManage"
const MainContent = ({ mainContent }) => {
    switch (mainContent) {
        case 'Author':
            return (
                <AuthorManage />
            )
        case 'Category':
            return (
                <CategoryManage />
            )
        case 'Publisher':
            return (
                <PublisherManage />
            )
        case 'Customer':
            return (
                <CustomerManage />
            )
    }
}
export default MainContent