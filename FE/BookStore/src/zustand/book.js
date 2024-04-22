import { create } from "zustand";
import { getAllBooks } from "../components/utils/BookApiFunction";
const useBookStore = create((set) => ({
    books: [],
    loading: false,
    error: null,
    fetchBooks: async () => {
        set({ loading: true });
        try {
            const res = await getAllBooks();
            const books = res.data
            set({ books, loading: false });
        } catch (error) {
            set({ error, loading: false });
        }
    },
}));

export default useBookStore;