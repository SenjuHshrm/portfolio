import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/partials/Navigation'
import Skills from './components/Skills';
import Links from './components/Links';
import About from './components/About';
import ToDo from './components/ToDo';

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
          <Route path='/todo' element={<ToDo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
