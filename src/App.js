import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProjects from './components/pages/NewProjects';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path='/' exact='true' element={<Home />}></Route>
          <Route path='/empresa' element={<Company />}></Route>
          <Route path='/projetos' element={<Projects />}></Route>
          <Route path='/newprojects' element={<NewProjects />}></Route>
          <Route path='/contato' element={<Contact />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;
