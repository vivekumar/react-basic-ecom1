import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='cart' element={<CardsDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


