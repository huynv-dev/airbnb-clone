import { create } from 'zustand';

interface User {
  id: string;
  name?: string;
  email?: string;
  emailVerified?: Date;
  image?: string;
  hashedPassword?: string;
  createdAt: Date;
  updatedAt: Date;
  favoriteIds?: string[];
}

interface UserStore {
  currentUser: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
}

const useUser = create<UserStore>((set) => ({
  currentUser: null,
  isLoading: true,
  setUser: (user) => set({ currentUser: user }),
  setLoading: (isLoading) => set({ isLoading }),
}));

export default useUser;
