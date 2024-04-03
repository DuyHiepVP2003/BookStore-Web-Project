const CategoryBarItem = ({ image, title }) => {
    return (
        <div className="flex flex-col w-20 items-center cursor-pointer rounded-lg">
            <img className="max-h-20" srcSet={image} alt="item" />
            <p>{title}</p>
        </div>
    )
}
export default CategoryBarItem