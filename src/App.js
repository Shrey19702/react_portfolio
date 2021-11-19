import Navbar from './Navbar';
import HeroPage from './Hero';
import Projects from './Projects';
import Footer from './Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-page">
          <Navbar/>
          <Routes>
            <Route path="/" element={<HeroPage/>} />
          </Routes>
        </div>
        <Projects/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
