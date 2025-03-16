import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<'Admin' | 'Editor' | 'Viewer'>('Viewer');

  const handleLogin = () => {
    login(username, role);
    navigate('/dashboard');
  };

  return (
    <div className='logpage'>
      <h2 className='log'>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <select onChange={(e) => setRole(e.target.value as 'Admin' | 'Editor' | 'Viewer')}>
        <option value="Admin">Admin</option>
        <option value="Editor">Editor</option>
        <option value="Viewer">Viewer</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
