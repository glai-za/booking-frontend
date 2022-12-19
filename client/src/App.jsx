import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Book from './pages/Book.jsx';
import Header from './components/Header.jsx';
import Services from './pages/Services.jsx';
import { useSelector } from 'react-redux';
import Auth from './pages/Auth.jsx';

function App() {
  const loggedIn = useSelector((state) => state.loggedIn);
  console.log(loggedIn);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
