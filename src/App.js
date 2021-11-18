import Navbar from './Navbar'
import HeroPage from './Hero'
import Projects from './Projects'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <div className="main-page">
        <Navbar/>
        <HeroPage/>
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
