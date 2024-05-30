import { create } from 'zustand';

export const useAuthStore = create((set, get) => ({
  // State
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
  // Getter
  isUserLoggedIn: () => get().user !== null,
}));
