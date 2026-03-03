import { create } from 'zustand';

export interface User {
  id: string;
  email: string;
  name: string;
}

interface UserState {
  user: User | null;
  isLoading: boolean;

  // Actions
  setUser: (user: User) => void;
  clearUser: () => void;
  setLoading: (isLoading: boolean) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  isLoading: false,

  setUser: (user: User) => {
    set({ user, isLoading: false });
  },

  clearUser: () => {
    set({ user: null, isLoading: false });
  },

  setLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
}));
