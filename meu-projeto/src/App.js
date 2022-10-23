import './App.css';
import Home from './pages/Home.js';
import Empresa from './pages/Empresa.js';
import Contato from './pages/Contato.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Router>
        <NavBar/>
          <Routes>
            <Route path='/' exact='true' element={<Home/>}></Route>
            <Route path='/empresa' element={<Empresa/>}></Route>
            <Route path='/contato' element={<Contato/>}></Route>
          </Routes>
          <Footer />
        </Router>


      </header>
    </div>
  );
}

export default App;