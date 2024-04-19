import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
    persist((set) => ({
        cart: [],
        addToCart: (item) =>
            set((state) => {
                const existingItem = state.cart.find((cartItem) => cartItem.book.id === item.book.id);
                if (existingItem) {
                    const updatedCart = state.cart.map((cartItem) =>
                        cartItem.book.id === item.book.id ? { ...cartItem, quantity: item.quantity } : cartItem
                    );
                    return { cart: updatedCart };
                } else {
                    return { cart: [...state.cart, item] };
                }
            }),
        addOneItem: (item) =>
            set((state) => {
                const existingItem = state.cart.find((cartItem) => cartItem.book.id === item.book.id);
                if (existingItem) {
                    const updatedCart = state.cart.map((cartItem) =>
                        cartItem.book.id === item.book.id ? { ...cartItem, quantity: item.quantity + 1 } : cartItem
                    );
                    return { cart: updatedCart };
                } else {
                    return { cart: [...state.cart, item] };
                }
            }),
        removeOneItem: (item) =>
            set((state) => {
                const existingItem = state.cart.find((cartItem) => cartItem.book.id === item.book.id);
                if (existingItem) {
                    const updatedCart = state.cart.map((cartItem) =>
                        cartItem.book.id === item.book.id ? { ...cartItem, quantity: item.quantity - 1 } : cartItem
                    );
                    return { cart: updatedCart };
                } else {
                    return { cart: [...state.cart, item] };
                }
            }),
        clearCart: () => set({ cart: [] }),
        removeFromCart: (itemId) =>
            set((state) => ({
                cart: state.cart.filter((cartItem) => cartItem.book.id !== itemId)
            }))
    }), {
        name: 'cart-store',
        getStorage: () => localStorage
    })
)

export default useStore