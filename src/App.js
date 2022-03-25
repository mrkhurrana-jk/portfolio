import './App.css';
import Navbar from './components/NavBar/NavBar';
import About from './container/About/About';
import Career from './container/Career/Career';
import Certification from './container/Certifications/Certification';
import Header from './container/Header/Header';
import Contactme from './container/Contactme/Contactme';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Career/>
        <Certification/>
        <Contactme/>
    </div>
  );
}

export default App;
