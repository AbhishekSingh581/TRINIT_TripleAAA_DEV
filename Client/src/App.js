import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Navigate } from 'react-router-dom';
import AppWrapper from './Pages/AppWrapper';
function App() {
  const getEmail=localStorage.getItem('emailData');
  const getPassword=localStorage.getItem('passwordData');
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <AppWrapper/>
    } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
