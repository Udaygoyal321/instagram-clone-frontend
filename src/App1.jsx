import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Logout from './pages/Logout';

const App1 = () => {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={token ? <Feed /> : <Navigate to="/login" />} />
      <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />

    </Routes>
  );
};

export default App1;
