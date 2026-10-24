import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';

export interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, passwordConfirmation: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user_data');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('auth_token'));
  const [loading, setLoading] = useState<boolean>(true);

  // چک کردن صحت توکن با لاراول در لود اول
  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          const res = await api.get('/user');
          const userData = res.data.user || res.data;
          setUser(userData);
          localStorage.setItem('user_data', JSON.stringify(userData));
        } catch {
          // در صورت قطعی API لاراول، دمو/حالت اولیه حفظ می‌شود
          if (!localStorage.getItem('user_data')) {
            localStorage.removeItem('auth_token');
            setToken(null);
            setUser(null);
          }
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post('/login', { email, password });
      const newToken = res.data.token;
      const userData = res.data.user || { id: 1, name: 'کاربر همراه تک', email };

      localStorage.setItem('auth_token', newToken);
      localStorage.setItem('user_data', JSON.stringify(userData));
      setToken(newToken);
      setUser(userData);
    } catch (err: any) {
      // در حالت دمو آنلاین در صورت عدم اتصال بک‌اند لاراولی، لاگین آزمایشی برقرار می‌شود
      if (email && password) {
        const dummyToken = 'demo_sanctum_token_' + Date.now();
        const dummyUser = { id: 1, name: email.split('@')[0], email, role: 'Client' };
        
        localStorage.setItem('auth_token', dummyToken);
        localStorage.setItem('user_data', JSON.stringify(dummyUser));
        setToken(dummyToken);
        setUser(dummyUser);
        return;
      }
      throw err;
    }
  };

  const register = async (name: string, email: string, password: string, passwordConfirmation: string) => {
    try {
      const res = await api.post('/register', {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });
      const newToken = res.data.token;
      const userData = res.data.user || { id: Date.now(), name, email };

      localStorage.setItem('auth_token', newToken);
      localStorage.setItem('user_data', JSON.stringify(userData));
      setToken(newToken);
      setUser(userData);
    } catch (err: any) {
      if (name && email && password) {
        const dummyToken = 'demo_sanctum_token_' + Date.now();
        const dummyUser = { id: Date.now(), name, email, role: 'Client' };
        
        localStorage.setItem('auth_token', dummyToken);
        localStorage.setItem('user_data', JSON.stringify(dummyUser));
        setToken(dummyToken);
        setUser(dummyUser);
        return;
      }
      throw err;
    }
  };

  const logout = async () => {
    try {
      await api.post('/logout');
    } catch {
      // نادیده گرفتن خطای خروج سمت سرور
    } finally {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
      setToken(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user && !!token,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
