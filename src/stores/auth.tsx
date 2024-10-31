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
  registeredUsers: User[];
  login: (data: LoginData) => void;
  register: (data: User) => void;
  logout: () => void;
}

const testUser = {
  name: 'Vinicius',
  email: 'teste@teste.com',
  address: 'Rua de São Paulo, nº 0 - São Paulo, SP 00000-000',
  password: 'password',
}

const getFromLocalStorage = (key: string) => {
  const localData = localStorage.getItem(key);

  if (localData) {
    return JSON.parse(localData);
  }

  return null;
}

const authStore = create<AuthStore>((set, get) => ({
  isLoggedIn: localStorage.getItem('user') ? true : false,
  user: getFromLocalStorage('user'),
  registeredUsers: getFromLocalStorage('registered') || [testUser],
  login: ({ email, password }) => {
    for (const user of get().registeredUsers) {
      if (user.email === email && user.password === password) {
        set(
          produce((state) => {
            state.user = testUser;
            state.isLoggedIn = true;
          })
        );
        localStorage.setItem('user', JSON.stringify(testUser));
        return;
      }
    }

    throw new Error('invalid_user');

  },
  register: (user) => {
    for (const { email } of get().registeredUsers) {
      if (user.email === email) {
        throw new Error('user_already_regitered');
      }
    }

    set(
      produce((state) => {
        state.registeredUsers = [
          ...state.registeredUsers,
          user,
        ];
        state.user = user;
        state.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem(
          'registered',
          JSON.stringify(state.registeredUsers),
        );
      })
    );
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
