import './App.css';
import { Banner } from './Componets/Banner';
import { NavBar } from './Componets/NavBar'
import { Skills } from './Componets/Skills';
import { Projects } from './Componets/Projects';
import { Footer } from './Componets/Footer';
import { Contact } from './Componets/Contact';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
