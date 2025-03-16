import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="dashboard-container">
      <div>
        <h2 className='dashboard'>Dashboard</h2>
        {user.role === 'Admin' && <p>Admin Controls</p>}
        {user.role === 'Editor' && <p>Content Editor Panel</p>}
        {user.role === 'Viewer' && <p>Read-Only Reports</p>}
      </div>
    </div>
  );
};

export default Dashboard;
