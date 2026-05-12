import { create } from "zustand";

interface User {
  id: string;

  telegramId: string;

  username?: string;

  firstName?: string;

  lastName?: string;

  photoUrl?: string;
}

interface AuthState {
  user: User | null;

  token: string | null;

  isAuthenticated: boolean;

  setAuth: (token: string, user: User) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  token: null,

  isAuthenticated: false,

  setAuth: (token, user) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }

    set({
      token,
      user,
      isAuthenticated: true,
    });
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }

    set({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  },
}));
