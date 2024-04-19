import { create } from "zustand";
import { persist } from "zustand/middleware";


const useAuthStore = create(
    persist(
        (set) => ({
          user: null,
          setUser: (userData) => set({ user: userData }),
        }),
        {
          name: 'user-store', 
          getStorage: () => localStorage,
        }
      )
);
export default useAuthStore;