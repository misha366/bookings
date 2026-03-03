import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;

  // Actions
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,

      setToken: (token: string) => {
        localStorage.setItem('authToken', token);
        set({ token, isAuthenticated: true });
      },

      clearToken: () => {
        localStorage.removeItem('authToken');
        set({ token: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ token: state.token }),
      onRehydrateStorage: () => (state) => {
        if (state?.token !== null && state?.token !== undefined) {
          state.isAuthenticated = true;
        }
      },
    },
  ),
);
