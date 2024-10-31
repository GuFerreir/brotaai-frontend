import { create } from 'zustand';
import { produce } from 'immer';

interface LoginData {
  email: string;
  password: string;
}

export interface User {
  name: string;
  email: string;
  address: string;
  password: string;
}

interface AuthStore {
  user: User | null;
  isLoggedIn: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
}

const testUser = {
  name: 'Vinicius',
  email: 'teste@teste.com',
  address: 'Rua de São Paulo, nº 0 - São Paulo, SP 00000-000',
  password: 'password',
}

const getUserFromLocalStorage = () => {
  const localData = localStorage.getItem('user');

  if (localData) {
    return JSON.parse(localData);
  }

  return null;
}

const authStore = create<AuthStore>((set) => ({
  isLoggedIn: localStorage.getItem('user') ? true : false,
  user: getUserFromLocalStorage(),
  login: ({ email, password }) => {
    if (email === testUser.email && password === testUser.password) {
      set(
        produce((state) => {
          state.user = testUser;
          state.isLoggedIn = true;
        })
      );
      localStorage.setItem('user', JSON.stringify(testUser));
      return;
    }

    throw new Error('invalid user');

  },
  logout: () => {
    set(
      produce((state) => {
        state.user = null;
        state.isLoggedIn = false;
      })
    );
    localStorage.removeItem('user');
  }
}));

export default authStore;
