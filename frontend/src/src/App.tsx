import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from '../src/pages/accueil/page';
import Blog from '../src/pages/blog/page';
import Contact from '../src/pages/contact/page';
import DevenirMembre from './pages/devenir-membre/page';
import RDV from './pages/prise-rendez-vous/page';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/devenir-membre" element={<DevenirMembre />} />
        <Route path="/rdv" element={<RDV />} />
      </Routes>
    </Router>
  );
};

export default App;
