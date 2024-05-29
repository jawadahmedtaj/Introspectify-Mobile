import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isUserLoggedIn: false,
  setUser: (user) => {
    // console.log('setUser', user);
    set({ user, isUserLoggedIn: !!user });
  },
  logout: () => set({ user: null, isUserLoggedIn: false }),
}));
