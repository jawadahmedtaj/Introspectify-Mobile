import { create } from 'zustand';

/**
 * Custom hook for managing authentication state.
 *
 * @param set - Function to update the state.
 * @param get - Function to get the current state.
 * @returns An object containing the authentication state and related functions.
 */
export const useAuthStore = create(
  (
    set,
    get: () => {
      user: unknown;
      isUserLoggedIn: () => boolean;
      logout: () => void;
    }
  ) => ({
    // State
    user: null,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
    // Getter
    isUserLoggedIn: () => get().user !== null,
  })
);
