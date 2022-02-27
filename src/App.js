import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Movie from './pages/Movie';

function App() {
  return (
    <Router>
      <Header />
      <div className="App w-fix font-mono">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/movie/:movie_id' element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
