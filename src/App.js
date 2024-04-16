import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <HomePage />
          <Footer />
          </>
        }/>
      </Routes>
    </Router>
  );
}