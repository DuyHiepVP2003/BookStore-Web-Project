import { useEffect, useState } from "react"
import Product from "./Product"
import { getAllBooks } from "../utils/BookApiFunction"
const ProductContainer = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        getAllBooks()
            .then((res)=>{
                setBooks(res.data)
            })
            .catch((err)=>{
                console.error(err)
            })
    })
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-4">
            {
                books.map(book => (
                    <Product book={book}/>
                ))
            }
        </div>
    )
}
export default ProductContainer