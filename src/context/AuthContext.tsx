import React, { createContext, useState, useContext } from 'react';

type UserRole = 'Admin' | 'Editor' | 'Viewer' | null;

interface AuthContextType {
  user: { username: string; role: UserRole } | null;
  login: (username: string, role: UserRole) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ username: string; role: UserRole } | null>(null);

  const login = (username: string, role: UserRole) => setUser({ username, role });
  const logout = () => setUser(null);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
