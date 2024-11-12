import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import PortifolioPage from '../pages/PortifolioPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/portifolio" element={<PortifolioPage />} />
    </Routes>
  )
}

export default AppRoutes
