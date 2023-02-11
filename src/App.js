import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DashBoard from './Pages/DashBoard';
import Admin from './components/component-adminPart/admin';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/dashBoard*" element={<Admin />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
