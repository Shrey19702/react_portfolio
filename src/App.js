import Navbar from './Navbar'
import HeroPage from './Hero'
import Projects from './Projects'

function App() {
  return (
    <div className="App">
      <div className="main-page">
        <Navbar/>
        <HeroPage/>
      </div>
      <Projects/>
    </div>
  );
}

export default App;
