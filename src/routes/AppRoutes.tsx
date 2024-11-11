import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import PortifolioPage from '../pages/PortifolioPage';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<PortifolioPage />} />
    </Routes>
  )
}

export default AppRoutes
