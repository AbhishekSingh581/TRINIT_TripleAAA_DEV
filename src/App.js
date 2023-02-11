import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Admin from './components/component-adminPart/admin';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/dashBoard*" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
