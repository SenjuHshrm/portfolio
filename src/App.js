import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/partials/Navigation'
import Skills from './components/Skills';
import Links from './components/Links';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/links' element={<Links />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
