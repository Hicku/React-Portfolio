import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';
import AboutMe from './AboutMe/pages/AboutMe';
import Portfolio from './Portfolio/Pages/Portfolio';
import ContactPage from './Contact/pages/ContactPage';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/work" element={<Portfolio />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
