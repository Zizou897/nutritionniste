import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/accueil/page';
import Blog from './pages/blog/page';
import ArticleDetail from './pages/blog/[id]';
import Contact from './pages/contact/page';
import DevenirMembre from './pages/devenir-membre/page';
import RDV from './pages/prise-rendez-vous/page';
import ConnexionToDashboard from './pages/connexion/page';
import DashboardLayout from './pages/dashboard/dashboardLayout';
import AppointmentsSection from './pages/dashboard/rendez-vous/page';
import ArticlesSection from './pages/dashboard/articles/page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/devenir-membre" element={<DevenirMembre />} />
        <Route path="/rdv" element={<RDV />} />
        <Route path="/connexion" element={<ConnexionToDashboard />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/dashboard/rendez-vous" element={<AppointmentsSection />} />
        <Route path="/dashboard/articles" element={<ArticlesSection />} />

      </Routes>
    </Router>
  );
};

export default App;
