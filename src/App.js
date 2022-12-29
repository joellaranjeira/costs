import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProjets from './components/pages/NewProjets';
import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/newprojects">NewProjets</Link>
          <Link to="/contato">contato</Link>
        </ul>
      </div>
      <Routes>
        <Container>
          <Route path='/' exact='true' element={<Home />}></Route>
          <Route path='/empresa' element={<Company />}></Route>
          <Route path='/contato' element={<Contact />}></Route>
          <Route path='/newprojects' element={<NewProjets />}></Route>
        </Container>
      </Routes>

      <p>Footer</p>
    </Router>

  );
}

export default App;
