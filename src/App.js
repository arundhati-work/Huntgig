import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import Home from './Pages/Home';
import About from './Pages/About';
import Jobs from './Pages/Jobs';
import Companies from './Pages/Companies';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Pages/Signup';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
