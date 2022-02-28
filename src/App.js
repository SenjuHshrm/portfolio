import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/partials/Navigation'
import Skills from './components/Skills';
import Links from './components/Links';
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/links' element={<Links />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
