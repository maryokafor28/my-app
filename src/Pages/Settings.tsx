import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Settings = () => {
  const { user } = useAuth();

  if (user?.role !== 'Admin') return <Navigate to="/dashboard" replace />;

  return <h2>Settings Page</h2>;
};

export default Settings;