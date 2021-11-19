import Home from './Home';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
